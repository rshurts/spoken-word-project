import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <section className="section">
            <span className="icon is-large">
              <a title="Vimeo" href="https://vimeo.com/owtheatre">
                <i className="mdi mdi-36px mdi-vimeo" />
              </a>
            </span>
            <span className="icon is-large">
              <a
                title="Facebook"
                href="https://www.facebook.com/openwindowtheatre/"
              >
                <i className="mdi mdi-36px mdi-facebook" />
              </a>
            </span>
            <span className="icon is-large">
              <a
                title="Instagram"
                href="https://www.instagram.com/openwindowtheatre/"
              >
                <i className="mdi mdi-36px mdi-instagram" />
              </a>
            </span>
            <span className="icon is-large">
              <a title="Twitter" href="https://twitter.com/owtheatre">
                <i className="mdi mdi-36px mdi-twitter" />
              </a>
            </span>
          </section>
          <section className="section">
            <div>
              <strong>Open Window Theatre</strong>
              <br />
              5300 S. Robert Trail #400
              <br />
              Inver Grove Heights, MN 55077
              <br />
              <a href="mailto:freshair@openwindowtheatre.org">
                freshair@openwindowtheatre.org
              </a>
              <br />
              <a href="tel:612-615-1515">612-615-1515</a>
            </div>
          </section>
        </div>
        <div className="content has-text-centered is-small">
          © Open Window Theatre {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </footer>
    )
  }
}

export default Footer
