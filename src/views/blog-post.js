import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Story from '../components/story'
import Label from '../components/label'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'
import './blog-post.css'

const BlogPost = (props) => {
  return (
    <div className="blog-post-container">
      <Helmet>
        <title>BlogPost - Notus Pro</title>
        <meta property="og:title" content="BlogPost - Notus Pro" />
      </Helmet>
      <div className="blog-post-hero">
        <div className="blog-post-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="blog-post-text text2XL">
          Miami Beah is looking different at night!
        </h1>
        <div className="blog-post-bg"></div>
      </div>
      <div className="blog-post-post-details">
        <div className="blog-post-container1">
          <svg viewBox="0 0 1170.2857142857142 1024" className="blog-post-icon">
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="blog-post-text01 textXL">posted 18 Sept 2021</span>
        <span className="blog-post-text02">
          <span className="blog-post-text03">
            &apos;Started from the bottom now we here&apos;
          </span>
          <span className="blog-post-text04">
            -
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="blog-post-text05">Mark Jonson</span>
          <br></br>
        </span>
        <span className="blog-post-text06">
          <span className="blog-post-text07">
            As a result of growing emeraldhouse gas emissions, climate models
            predict that our planet will get significantly warmer, that
            ecosystems will be changed or destroyed, and that enormous human and
            economic costs will be incurred. These scenarios aren’t guaranteed,
            but avoiding them will be very hard. We’re trying to take small
            steps to mitigate our impact.
          </span>
          <br></br>
        </span>
      </div>
      <div className="blog-post-container2">
        <Story></Story>
      </div>
      <div className="blog-post-posts">
        <div className="blog-post-container3">
          <Label text="STORIES"></Label>
          <h3 className="blog-post-text08 healine">
            <span className="blog-post-text09">Before I go </span>
          </h3>
          <span className="blog-post-text10 textXL">
            We&apos;ve got time, but we are only doing what they say and want. I
            do not want to live as I will never die, cause life&apos;s too
            short, and I do not want to drown myself, as others would like.
          </span>
        </div>
        <ArticleCard avatar_src="/playground_assets/team3-200h.jpg"></ArticleCard>
        <ArticleCard
          name="Paul Smith"
          time="Drawn on 23 April"
          title="MateLabs mixes learning with IFTTT"
          image_src="/playground_assets/team5-1400w.jpg"
          avatar_src="/playground_assets/team1-200h.jpg"
        ></ArticleCard>
        <ArticleCard
          name="Jasmine Taylor"
          time="Drawn on 23 April"
          title="US venture investment ticks up in Q2"
          image_src="/playground_assets/team3-200h.jpg"
          avatar_src="/playground_assets/team2-200h.jpg"
        ></ArticleCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPost
