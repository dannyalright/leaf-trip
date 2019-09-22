import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FlashLine = ({ upsideDown }) => {
  const data = useStaticQuery(graphql`
    query {
      highlightFlat: file(relativePath: { eq: "doodles/highlight-flat.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.highlightFlat.childImageSharp.fluid}
      alt="A flashy line!"
      draggable={false}
      style={{
        margin: `0 auto`,
      }}
      imgStyle={{
        mixBlendMode: `darken`,
        transform: upsideDown ? `rotate(180deg)` : `auto`,
      }}
    />
  )
}

FlashLine.propTypes = {
  upsideDown: PropTypes.bool,
}

export default FlashLine
