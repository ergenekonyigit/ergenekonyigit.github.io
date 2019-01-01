import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p
          style={{
            maxWidth: 310,
            fontFamily: 'sans-serif',
          }}
        >
          A developer currently living in Istanbul.
        </p>
      </div>
    )
  }
}

export default Bio
