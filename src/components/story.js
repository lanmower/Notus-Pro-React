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
      <h3 className="story-text02 text2XL">{props.heading}</h3>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="story-image"
      />
      <span className="story-text03 textLG">
        <span className="story-text04">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he
          wouldn&apos;t scroll to get here. Add a button if you want the user to
          see more. We are here to make life better.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span className="story-text07">
          And now I look and look around and there’s so many Kanyes I&apos;ve
          been trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.
        </span>
        <br></br>
      </span>
      <div className="story-container">
        <span className="textLG">
          <span className="story-text09">&quot;</span>
          <span className="story-text10">
            And thank you for turning my personal jean jacket into a couture
            piece.
          </span>
          <span className="story-text11">&quot;</span>
        </span>
        <span className="story-text12">
          <span className="story-text13">Kanye West, Producer.</span>
          <span className="story-text14"></span>
        </span>
      </div>
      <h3 className="story-text15 text2XL">{props.heading1}</h3>
      <span className="story-text16 textLG">
        <span className="story-text17">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he
          wouldn&apos;t scroll to get here. Add a button if you want the user to
          see more. We are here to make life better.
        </span>
        <br></br>
      </span>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="story-image1"
      />
      <h3 className="story-text18 text2XL">{props.heading2}</h3>
      <span className="story-text19 textLG">
        <span className="story-text20">
          We are here to make life better. And now I look and look around and
          there’s so many Kanyes I&apos;ve been trying to figure out the bed
          design for the master bedroom at our Hidden Hills compound... and
          thank you for turning my personal jean jacket into a couture piece. I
          speak yell scream directly at the old guard on behalf of the future.
          daytime All respect prayers and love to Phife’s family Thank you for
          so much inspiration
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span className="story-text23">
          Thank you Anna for the invite thank you to the whole Vogue team And I
          love you like Kanye loves Kanye Pand Pand Panda I&apos;ve been trying
          to figure out the bed design for the master bedroom at our Hidden
          Hills compound...The Pablo pop up was almost a pop up of influence.
          All respect prayers and love to Phife’s family Thank you for so much
          inspiration daytime I love this new Ferg album! The Life of Pablo is
          now available for purchase I have a dream. Thank you to everybody who
          made The Life of Pablo the number 1 album in the world! I&apos;m so
          proud of the nr #1 song in the country. Panda! Good music 2016!
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span className="story-text26">
          I love this new Ferg album! The Life of Pablo is now available for
          purchase I have a dream. Thank you to everybody who made The Life of
          Pablo the number 1 album in the world! I&apos;m so proud of the nr #1
          song in the country. Panda! Good music 2016!
        </span>
        <br></br>
        <br></br>
      </span>
      <Post></Post>
    </div>
  )
}

Story.defaultProps = {
  heading: 'The Castle Looks Different at Night...',
  image_src: '/playground_assets/new-york-city-1500w.jpg',
  image_alt: 'image',
  heading1: 'Using Video Games To Generate Clicks',
  image_src1: '/playground_assets/sofia-kuniakina-1200w.jpg',
  image_alt1: 'image',
  heading2: 'Rest of the Story',
}

Story.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  heading2: PropTypes.string,
}

export default Story
