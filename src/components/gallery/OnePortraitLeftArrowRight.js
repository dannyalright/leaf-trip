import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ArrowCurved from "../shapes/ArrowCurved"

const OneLeftArrowRight = ({ photoFile, photoAlt, text }) => (
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
          <Img
            fluid={photoFluid}
            alt={photoAlt}
            style={{
              maxWidth: `50%`,
            }}
          />
          <div
            style={{
              maxWidth: `75%`,
              margin: `-3rem auto 6rem auto`,
            }}
          >
            <ArrowCurved />
            <p style={{ display: `block`, textAlign: `right` }}>{text}</p>
          </div>
        </>
      )
    }}
  />
)

OneLeftArrowRight.defaultProps = {
  photoAlt: `A photo from our road trip.`,
}

export default OneLeftArrowRight
