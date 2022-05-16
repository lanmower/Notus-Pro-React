import React from 'react'

import PropTypes from 'prop-types'

import Post from './post'
import './story.css'

const Story = (props) => {
  return (
    <div className="story-story">
      <span className="story-text textLG">
        <span>March 1, 2019</span>
      </span>
      <h3 className="story-text2 text2XL">{props.heading}</h3>
      <span className="story-text3 textLG">
        <span className="story-text4">FOR MARKDOWN</span>
      </span>
      <Post></Post>
    </div>
  )
}

Story.defaultProps = {
  heading: 'The Castle Looks Different at Night...',
}

Story.propTypes = {
  heading: PropTypes.string,
}

export default Story
