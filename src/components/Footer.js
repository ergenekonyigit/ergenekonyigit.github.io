import React from 'react'
import { FeedbackFish } from '@feedback-fish/react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          fontFamily: 'sans-serif',
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}
      >
        <div>
          <a
            href="https://twitter.com/ergenekonyigit"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>{' '}
          &bull;{' '}
          <a
            href="https://github.com/ergenekonyigit"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{' '}
          &bull;{' '}
          <a
            href="https://www.linkedin.com/in/ergenekonyigit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>{' '}
          &bull;{' '}
          <a
            href="mailto:yigitergenekon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-mail
          </a>
        </div>
        <div>
          <FeedbackFish projectId="e12f9ac7f0ce05">
            <a>send feedback</a>
          </FeedbackFish>{' '}
          &bull;{' '}
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
