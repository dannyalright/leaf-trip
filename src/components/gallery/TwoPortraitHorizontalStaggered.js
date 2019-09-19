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

      // const photoOneSizes = photoOneFileMatch.node.childImageSharp.sizes
      // const photoTwoSizes = photoTwoFileMatch.node.childImageSharp.sizes

      const photoOneFluid = photoOneFileMatch.node.childImageSharp.fluid
      const photoTwoFluid = photoTwoFileMatch.node.childImageSharp.fluid

      return (
        <div
          style={{
            display: `flex`,
          }}
        >
          <Img
            alt={photoOneAlt}
            // sizes={photoOneSizes}
            fluid={photoOneFluid}
            style={{
              display: `inline-block`,
              flex: `50%`,
              height: `100%`,
              marginRight: `1rem`,
            }}
          />
          <Img
            alt={photoTwoAlt}
            // sizes={photoTwoSizes}
            fluid={photoTwoFluid}
            style={{
              display: `inline-block`,
              flex: `50%`,
              height: `100%`,
              marginTop: `3rem`,
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
