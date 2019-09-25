import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FourUpFlat = ({
  photoOneFile,
  photoOneAlt,
  photoTwoFile,
  photoTwoAlt,
  photoThreeFile,
  photoThreeAlt,
  photoFourFile,
  photoFourAlt,
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
      const photoThreeFileMatch = data.images.edges.find(n => {
        return n.node.relativePath.includes(photoThreeFile)
      })
      if (!photoThreeFileMatch) {
        return null
      }
      const photoFourFileMatch = data.images.edges.find(n => {
        return n.node.relativePath.includes(photoFourFile)
      })
      if (!photoFourFileMatch) {
        return null
      }

      const photoOneFluid = photoOneFileMatch.node.childImageSharp.fluid
      const photoTwoFluid = photoTwoFileMatch.node.childImageSharp.fluid
      const photoThreeFluid = photoThreeFileMatch.node.childImageSharp.fluid
      const photoFourFluid = photoFourFileMatch.node.childImageSharp.fluid

      return (
        <>
          <div
            style={{
              display: `flex`,
              gap: `1rem`,
              flexWrap: `wrap`,
            }}
          >
            <Img
              style={{ flex: `2` }}
              fluid={photoOneFluid}
              alt={photoOneAlt}
            />
            <Img
              style={{ flex: `1` }}
              fluid={photoTwoFluid}
              alt={photoTwoAlt}
            />
          </div>
          <div
            style={{
              display: `flex`,
              gap: `1rem`,
              marginTop: `1rem`,
              flexWrap: `wrap`,
            }}
          >
            <Img
              style={{ flex: `1` }}
              fluid={photoThreeFluid}
              alt={photoThreeAlt}
            />
            <Img
              style={{ flex: `2` }}
              fluid={photoFourFluid}
              alt={photoFourAlt}
            />
          </div>
        </>
      )
    }}
  />
)

FourUpFlat.defaultProps = {
  photoOneAlt: `A photo from our road trip.`,
  photoTwoAlt: `A photo from our road trip.`,
  photoThreeAlt: `A photo from our road trip.`,
  photoFourAlt: `A photo from our road trip.`,
}

export default FourUpFlat
