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
            alt={props.image_alt4}
            src={props.image_src4}
            className="post-image"
          />
          <div className="post-container2">
            <span className="post-text01 textSM">{props.text7}</span>
            <div className="post-container3">
              <span className="post-text02 textXS">{props.text8}</span>
            </div>
          </div>
        </div>
        <SecondaryButton button="FOLLOW"></SecondaryButton>
      </div>
      <span className="post-text03 textMD">
        <span className="post-text04">
          Personal profiles are the perfect way for you to grab their attention
          and persuade recruiters to continue reading your CV because you’re
          telling them from the off exactly why they should hire you.
        </span>
        <br></br>
      </span>
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="post-image1"
      />
      <div className="post-container4">
        <div className="post-container5">
          <svg viewBox="0 0 1024 1024" className="post-icon">
            <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
          </svg>
          <span className="post-text05 textXS">{props.text3}</span>
          <svg viewBox="0 0 1024 1024" className="post-icon2">
            <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
          </svg>
          <span className="post-text06 textXS">{props.text4}</span>
          <svg viewBox="0 0 1024 1024" className="post-icon4">
            <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
          <span className="post-text07 textXS">{props.text5}</span>
        </div>
        <div className="post-container6">
          <img
            alt={props.image_alt5}
            src={props.image_src5}
            className="post-image2"
          />
          <img
            alt={props.image_alt6}
            src={props.image_src6}
            className="post-image3"
          />
          <img
            alt={props.image_alt7}
            src={props.image_src7}
            className="post-image4"
          />
          <span className="post-text08 textXS">{props.text6}</span>
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
          alt={props.image_alt3}
          src={props.image_src3}
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
  image_src2: '/playground_assets/new-york-city-1500w.jpg',
  image_alt2: 'image',
  image_src3: '/playground_assets/team4-200h.png',
  image_alt3: 'image',
  textarea_placeholder: 'Write your comment',
  image_src4: '/playground_assets/team5-200w.jpg',
  image_alt4: 'image',
  text3: '150',
  text4: '36',
  text5: '12',
  image_src5: '/playground_assets/team5-200w.jpg',
  image_alt5: 'image',
  image_src6: '/playground_assets/team6-200h.jpg',
  image_alt6: 'image',
  image_src7: '/playground_assets/team1-200h.jpg',
  image_alt7: 'image',
  text6: 'and 30+ more',
  text7: 'JOHN SNOW',
  text8: '3 days ago',
}

Post.propTypes = {
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt4: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt7: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
}

export default Post
