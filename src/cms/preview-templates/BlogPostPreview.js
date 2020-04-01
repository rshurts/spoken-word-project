import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      tags={data.tags}
      title={data.title}
      author={data.author}
      vimeoId={data.vimeoId}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
