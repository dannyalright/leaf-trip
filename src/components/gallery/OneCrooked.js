import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OneCrooked = ({ photoFile, photoAlt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const photoFileMatch = data.images.edges.find(n => {
        return n.node.relativePath.includes(photoFile)
      })
      if (!photoFileMatch) {
        return null
      }

      const photoFluid = photoFileMatch.node.childImageSharp.fluid

      return (
        <Img
          alt={photoAlt}
          fluid={photoFluid}
          style={{
            maxWidth: `75%`,
            margin: `2rem auto`,
            transform: `rotate(-2deg)`,
          }}
        />
      )
    }}
  />
)

OneCrooked.defaultProps = {
  photoAlt: `A photo from our road trip.`,
}

export default OneCrooked
