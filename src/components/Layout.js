import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.0),
            fontFamily: 'sans-serif',
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Ergenekon Yiğit
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#ffffff',
            }}
            to={'/'}
          >
            Ergenekon Yiğit
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          backgroundColor: '#111111',
          color: '#ffffff',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 7)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
