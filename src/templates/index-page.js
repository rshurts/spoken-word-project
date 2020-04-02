import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  image,
  title,
  description,
  heading,
  subheading,
  mainpitch,
  vimeo,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      {image.childImageSharp ? (
        <BackgroundImage
          className="full-width-image margin-top-0"
          fluid={image.childImageSharp.fluid}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '150px',
              lineHeight: '1',
              justifyContent: 'space-around',
              alignItems: 'left',
              flexDirection: 'column',
            }}
          >
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-2-tablet is-size-1-widescreen box-background">
              {heading}
            </h1>
            <h2 className="has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-4-widescreen box-background">
              {subheading}
            </h2>
          </div>
        </BackgroundImage>
      ) : null}
      <section className="section">
        <div className="container">
          <figure className="image is-16by9" style={{ marginBottom: '3rem' }}>
            <iframe
              title={vimeo.title}
              className="has-ratio"
              src={`https://player.vimeo.com/video/${vimeo.id}`}
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </figure>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column has-text-centered">
                    <script
                      src="https://donorbox.org/widget.js"
                      paypalexpress="false"
                    ></script>
                    <iframe
                      title="donorbox"
                      allowpaymentrequest=""
                      frameBorder="0"
                      height="820px"
                      name="donorbox"
                      scrolling="no"
                      seamless="seamless"
                      src="https://donorbox.org/embed/open-window-theatre"
                      style={{
                        maxWidth: '368px',
                        minWidth: '310px',
                        maxHeight: 'none!important',
                      }}
                      width="100%"
                    ></iframe>
                  </div>
                  <div className="column">
                    <PageContent className="content" content={content} />
                    <div className="content has-text-centered">
                      <a
                        className="button is-link"
                        href="https://red.vendini.com/donation-software.html?t=donation&d=8b64c8a0140042827aee0b14b8d082d7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Become a COR Patron
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h1>{mainpitch.title}</h1>
                  <p>{mainpitch.description}</p>
                </div>
                <div className="column is-12">
                  <h2>Latest spoken words</h2>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="button is-link" to="/blog">
                      Watch more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  vimeo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { edges } = data.allMarkdownRemark
  const {
    node: {
      frontmatter: { vimeoId, title },
    },
  } = edges[0]

  return (
    <Layout>
      <IndexPageTemplate
        image={data.file}
        title={frontmatter.title}
        description={frontmatter.description}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        vimeo={{ id: vimeoId, title }}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object.isRequired,
      html: PropTypes.string.isRequired,
    }),
    allMarkdownRemarks: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            vimeoId: PropTypes.string.isRequired,
            vimeoTitle: PropTypes.string.isRequired,
          }),
        }),
      }),
    }),
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        description
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            title
            vimeoId
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    file(relativePath: { eq: "theater.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
