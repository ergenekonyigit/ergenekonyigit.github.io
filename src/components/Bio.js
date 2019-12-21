import React from 'react'

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
            maxWidth: 320,
            fontFamily: 'sans-serif',
          }}
        >
          A developer currently living in Istanbul. Working as a Software Engineer at Trendyol.
        </p>
      </div>
    )
  }
}

export default Bio
