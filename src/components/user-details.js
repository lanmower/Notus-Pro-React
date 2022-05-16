import React from 'react'

import PropTypes from 'prop-types'

import './user-details.css'

const UserDetails = (props) => {
  return (
    <div className="user-details-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="user-details-image"
      />
      <div className="user-details-container1">
        <span className="user-details-text textSM">{props.name}</span>
        <div className="user-details-container2">
          <span className="user-details-text1 textXS">
            Published
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="user-details-text2 textXS">{props.time}</span>
          <span className="user-details-text3 textXS">ago</span>
        </div>
      </div>
    </div>
  )
}

UserDetails.defaultProps = {
  image_src: '/playground_assets/team4-200h.png',
  name: 'Laura Hanks',
  time: '3 days',
  image_alt: 'image',
}

UserDetails.propTypes = {
  image_src: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  image_alt: PropTypes.string,
}

export default UserDetails
