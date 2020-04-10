import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h1>Open Submissions</h1>
                  <p>
                    We want to open up participation in the Spoken Word Project
                    to everyone. We will post occasional guest videos and yours
                    could be one of them! If you wish to participate, here are
                    some guidelines…
                  </p>
                  <ol>
                    <li>
                      Select a short poem (1-3 minutes long when recited) that
                      exemplifies a message of transcendence, hope, or
                      reconciliation. Poems for this project should be free of
                      profanity and accessible to a broad multi-generational
                      audience in order to be considered.
                    </li>
                    <li>
                      Record yourself reciting the poem. (This is the fun part!)
                      The video can be of any quality. If you have some
                      videography skills feel free to add some production flare
                      to your video, but if not then just record a simple video.
                    </li>
                    <li>
                      The poem does not need to be memorized. If reading the
                      poem, rehearse it several times first to help with a
                      smooth delivery. If reading from a piece of paper or book,
                      be sure to look up and make “eye contact” with your
                      audience more so than not. If recording on your phone or
                      tablet, using a teleprompter app can help with a smooth
                      and engaging delivery.
                    </li>
                    <li>
                      Upload your video to Google Drive, Dropbox, or some other
                      file sharing service and send us a shared link that will
                      enable us to download your video.
                    </li>
                  </ol>
                  <p>
                    That’s it! If we select your video for the project then we
                    will add our branding to it and will share it here and
                    throughout our social media channels. Be sure to like our{' '}
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/openwindowtheatre/"
                    >
                      Facebook
                    </a>{' '}
                    page or follow us on{' '}
                    <a
                      title="Instagram"
                      href="https://www.instagram.com/openwindowtheatre/"
                    >
                      Instagram
                    </a>{' '}
                    or{' '}
                    <a title="Twitter" href="https://twitter.com/owtheatre">
                      Twitter
                    </a>{' '}
                    so we can tag you to the video post.
                  </p>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'link'}>
                        Link to video
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'url'}
                          name={'link'}
                          onChange={this.handleChange}
                          id={'link'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'poem'}>
                        Poem title
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'poem'}
                          onChange={this.handleChange}
                          id={'poem'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'author'}>
                        Author of poem
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'author'}
                          onChange={this.handleChange}
                          id={'author'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={false}
                          style={{ resize: 'none' }}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="checkbox"
                          type={'checkbox'}
                          name={'agree'}
                          id={'agree'}
                          required={'true'}
                          onChange={this.handleChange}
                        />{' '}
                        My submission adheres to the guidelines.
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
