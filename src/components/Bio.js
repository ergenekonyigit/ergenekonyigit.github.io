import React from 'react'

import { MatterStepOne } from './GaltonBoard'
import profilePic from '../assets/profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginBottom: rhythm(2.5),
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
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
                fontFamily: 'sans-serif',
              }}
            >
              A <b>developer</b> currently living in Istanbul. Working at{' '}
              <b>Trendyol</b>.
            </p>
          </div>
          {/* <MatterStepOne /> */}
        </div>
      </div>
    )
  }
}

export default Bio
