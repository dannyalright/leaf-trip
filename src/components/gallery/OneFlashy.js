import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FlashLine from "../dividers/FlashLine"

const OneFlashy = ({ photoFile, photoAlt }) => (
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

      // const photoSizes = photoFileMatch.node.childImageSharp.sizes

      const photoFluid = photoFileMatch.node.childImageSharp.fluid

      return (
        <div style={{ margin: `3rem auto` }}>
          <FlashLine />
          <Img
            alt={photoAlt}
            // sizes={photoSizes}
            fluid={photoFluid}
            style={{}}
          />
          <FlashLine upsideDown={true} />
        </div>
      )
    }}
  />
)

OneFlashy.defaultProps = {
  photoAlt: `A photo from our road trip.`,
}

export default OneFlashy
