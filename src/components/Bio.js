import React from 'react'

import profilePic from '../assets/profile-pic.jpg';
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
        <img
          src={profilePic}
          alt={`Ergenekon Yiğit`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p
          style={{
            maxWidth: 330,
            fontFamily: 'Inter',
          }}
        >
          A <b>developer</b> currently living in Istanbul. Working at <b>Trendyol</b>.
        </p>
      </div>
    )
  }
}

export default Bio
