import PropTypes from "prop-types"
import React from "react"

const SubheaderText = ({ textHex, align, children }) => (
  <div
    style={{
      maxWidth: `17rem`,
      margin: (() => {
        switch (align) {
          case "left":
            return `0`
          case "center":
            return `0 auto`
          case "right":
            return `auto 0 auto auto`
          default:
            return `0 auto`
        }
      })(),
    }}
  >
    <h3
      style={{
        color: `#${textHex}`,
        textAlign: align,
        fontWeight: `500`,
        fontSize: `1.5rem`,
      }}
    >
      {children}
    </h3>
  </div>
)

SubheaderText.propTypes = {
  textHex: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
}

SubheaderText.defaultProps = {
  textHex: `000000`,
  align: `left`,
  children: `Insert text here.`,
}

export default SubheaderText
