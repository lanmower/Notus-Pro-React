import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButton from './secondary-button'
import PostReaction from './post-reaction'
import './post.css'

const Post = (props) => {
  return (
    <div className="post-post">
      <span className="post-text textXL">What people say...</span>
      <div className="post-divider"></div>
      <div className="post-container">
        <div className="post-container1">
          <img
            alt={props.prifle_alt}
            src={props.profile_ac}
            className="post-image"
          />
          <div className="post-container2">
            <span className="post-text01 textSM">{props.user_title}</span>
            <div className="post-container3">
              <span className="post-text02 textXS">{props.time}</span>
            </div>
          </div>
        </div>
        <SecondaryButton button="FOLLOW"></SecondaryButton>
      </div>
      <span className="post-text03 textMD"></span>
      <span>{props.text}</span>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="post-image1"
      />
      <div className="post-container4">
        <div className="post-container5">
          <svg viewBox="0 0 1024 1024" className="post-icon">
            <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
          </svg>
          <span className="post-text05 textXS">{props.like_count2}</span>
          <svg viewBox="0 0 1024 1024" className="post-icon2">
            <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
          </svg>
          <span className="post-text06 textXS">{props.comment_count}</span>
          <svg viewBox="0 0 1024 1024" className="post-icon4">
            <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
          <span className="post-text07 textXS">{props.reblog_count}</span>
        </div>
        <div className="post-container6">
          <img
            alt={props.profile_icon_5_alt}
            src={props.profile_icon_6_src}
            className="post-image2"
          />
          <img
            alt={props.profile_icon_2_alt}
            src={props.profile_icon_3_src1}
            className="post-image3"
          />
          <img
            alt={props.profile_icon_3_alt}
            src={props.profile_icon_3_src}
            className="post-image4"
          />
          <span className="post-text08 textXS">{props.like_count}</span>
        </div>
      </div>
      <div className="post-divider1"></div>
      <span className="post-text09 textSM">Load previous</span>
      <PostReaction
        name="Michael Lewis"
        likes="3"
        image_src="/playground_assets/team1-200h.jpg"
      ></PostReaction>
      <PostReaction
        name="Jessica Stones"
        text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down."
        shares="1"
        image_src="/playground_assets/team6-200h.jpg"
      ></PostReaction>
      <span className="post-text10 textSM">Load next</span>
      <div className="post-container7">
        <img
          alt={props.user_profile_alt}
          src={props.user_profile_src}
          className="post-image5"
        />
        <textarea
          rows="1"
          placeholder={props.textarea_placeholder}
          className="post-textarea textarea textSM"
        ></textarea>
      </div>
    </div>
  )
}

Post.defaultProps = {
  image_src: '/playground_assets/new-york-city-1500w.jpg',
  image_alt: 'image',
  user_profile_src: '/playground_assets/team4-200h.png',
  user_profile_alt: 'image',
  textarea_placeholder: 'Write your comment',
  profile_ac: '/playground_assets/team5-200w.jpg',
  prifle_alt: 'image',
  like_count2: '150',
  comment_count: '36',
  reblog_count: '12',
  profile_icon_6_src: '/playground_assets/team5-200w.jpg',
  profile_icon_5_alt: 'image',
  profile_icon_3_src1: '/playground_assets/team6-200h.jpg',
  profile_icon_2_alt: 'image',
  profile_icon_3_src: '/playground_assets/team1-200h.jpg',
  profile_icon_3_alt: 'image',
  like_count: 'and 30+ more',
  user_title: 'JOHN SNOW',
  time: '3 days ago',
  text: 'lorem ipsum',
}

Post.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  user_profile_src: PropTypes.string,
  user_profile_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  profile_ac: PropTypes.string,
  prifle_alt: PropTypes.string,
  like_count2: PropTypes.string,
  comment_count: PropTypes.string,
  reblog_count: PropTypes.string,
  profile_icon_6_src: PropTypes.string,
  profile_icon_5_alt: PropTypes.string,
  profile_icon_3_src1: PropTypes.string,
  profile_icon_2_alt: PropTypes.string,
  profile_icon_3_src: PropTypes.string,
  profile_icon_3_alt: PropTypes.string,
  like_count: PropTypes.string,
  user_title: PropTypes.string,
  time: PropTypes.string,
  text: PropTypes.string,
}

export default Post
