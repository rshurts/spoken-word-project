import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BlogIndexPage = ({ data }) => (
  <Layout>
    <BackgroundImage
      className="full-width-image margin-top-0"
      fluid={data.file.childImageSharp.fluid}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: '50% 70%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="has-text-weight-bold is-size-5-mobile is-size-2-tablet is-size-1-widescreen box-background">
        Spoken Word Archives
      </h1>
    </BackgroundImage>
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
)

export default BlogIndexPage

export const pageQuery = graphql`
  query BlogIndexPage {
    file(relativePath: { eq: "lobby.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
