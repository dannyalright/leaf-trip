import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, pageHex }) => (
  <header
    style={{
      background: `white`,
      padding: `1rem`,
      display: `flex`,
    }}
  >
    <h1 style={{ fontSize: `1rem`, fontWeight: `400` }}>
      <Link
        to="/"
        style={{
          color: `#${pageHex}`,
          textDecoration: `none`,
        }}
      >
        Temporary header for {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageHex: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Site Title`,
  pageHex: `000000`,
}

export default Header
