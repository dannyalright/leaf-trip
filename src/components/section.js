import PropTypes from "prop-types"
import React from "react"

const Section = ({ backgroundHex, textHex, children }) => (
  <section
    style={{
      background: `#${backgroundHex}`,
      color: `#${textHex}`,
      marginBottom: `0px`,
      padding: `2rem 1rem`,
    }}
  >
    {children}
  </section>
)

Section.propTypes = {
  backgroundHex: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  backgroundHex: `ff0000`,
  textHex: `000000`,
}

export default Section
