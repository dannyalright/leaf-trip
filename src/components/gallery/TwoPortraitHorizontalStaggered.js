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
        <div
          class="container-m-width container-m-height"
          style={{
            display: `flex`,
          }}
        >
          <Img
            alt={photoOneAlt}
            fluid={photoOneFluid}
            style={{
              display: `inline-block`,
              flex: `1`,
              height: `100%`,
              marginRight: `1rem`,
            }}
          />
          <Img
            alt={photoTwoAlt}
            fluid={photoTwoFluid}
            style={{
              display: `inline-block`,
              flex: `1`,
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
