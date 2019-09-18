import { Link } from "gatsby"
import React from "react"

const FooterItem = props => (
  <div
    style={{
      margin: `0 auto`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <h1 style={{ margin: 0, fontSize: `10vw` }}>
      <Link
        to={props.to}
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {props.children}
      </Link>
    </h1>
  </div>
)

const DayFooter = () => (
  <footer
    style={{
      background: `black`,
      display: `flex`,
    }}
  >
    <FooterItem to="dayTwo">Day 2</FooterItem>
    <FooterItem to="dayFour">Day 4</FooterItem>
  </footer>
)

export default DayFooter
