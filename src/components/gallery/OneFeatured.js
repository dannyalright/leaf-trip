import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OneFeatured = ({ photoFile, photoAlt, children }) => (
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
        <>
          <Img alt={photoAlt} fluid={photoFluid} />
          {children}
        </>
      )
    }}
  />
)

OneFeatured.defaultProps = {
  photoAlt: `A photo from our road trip.`,
}

export default OneFeatured
