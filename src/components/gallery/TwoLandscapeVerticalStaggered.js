import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TwoLandscapeVerticalStaggered = ({
  photoOneFile,
  photoOneAlt,
  photoTwoFile,
  photoTwoAlt,
}) => (
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
      const photoOneFileMatch = data.images.edges.find(n => {
        return n.node.relativePath.includes(photoOneFile)
      })
      if (!photoOneFileMatch) {
        return null
      }
      const photoTwoFileMatch = data.images.edges.find(n => {
        return n.node.relativePath.includes(photoTwoFile)
      })
      if (!photoTwoFileMatch) {
        return null
      }

      const photoOneFluid = photoOneFileMatch.node.childImageSharp.fluid
      const photoTwoFluid = photoTwoFileMatch.node.childImageSharp.fluid

      return (
        <div class=" ">
          <Img
            alt={photoOneAlt}
            fluid={photoOneFluid}
            style={{
              maxWidth: `80%`,
              margin: `0 auto 1rem 0`,
            }}
          />
          <Img
            alt={photoTwoAlt}
            fluid={photoTwoFluid}
            style={{
              maxWidth: `80%`,
              margin: `auto 0 auto auto`,
            }}
          />
        </div>
      )
    }}
  />
)

TwoLandscapeVerticalStaggered.defaultProps = {
  photoOneAlt: `A photo from our road trip.`,
  photoTwoAlt: `A photo from our road trip.`,
}

export default TwoLandscapeVerticalStaggered
