import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RabbitHole = ({
  photoOneFile,
  photoOneAlt,
  photoTwoFile,
  photoTwoAlt,
  photoThreeFile,
  photoThreeAlt,
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

      const photoOneFluid = photoOneFileMatch.node.childImageSharp.fluid
      const photoTwoFluid = photoTwoFileMatch.node.childImageSharp.fluid
      const photoThreeFluid = photoThreeFileMatch.node.childImageSharp.fluid

      return (
        <a href="http://TODO.com">
          <div
            class="container-medium"
            style={{
              overflow: `hidden`,
            }}
          >
            <div
              style={{
                height: `140vw`,
                width: `140vw`,
                marginLeft: `-20vw`,
                borderRadius: `100%`,
                backgroundColor: `black`,
                overflow: `hidden`,
              }}
            >
              <h1 style={{ color: `white`, textAlign: `center` }}>
                Rabbit hole.
              </h1>
              <div
                style={{
                  display: `flex`,
                  gap: `1rem`,
                }}
              >
                <Img
                  style={{
                    display: `inline-block`,
                    flex: `1`,
                    height: `100%`,
                    marginTop: `20rem`,
                  }}
                  alt={photoOneAlt}
                  fluid={photoOneFluid}
                />
                <Img
                  style={{
                    display: `inline-block`,
                    flex: `1`,
                    height: `100%`,
                    marginTop: `10rem`,
                  }}
                  alt={photoTwoAlt}
                  fluid={photoTwoFluid}
                />

                <Img
                  style={{
                    display: `inline-block`,
                    flex: `1`,
                    height: `100%`,
                    marginTop: `12rem`,
                  }}
                  alt={photoThreeAlt}
                  fluid={photoThreeFluid}
                />
              </div>
            </div>
          </div>
        </a>
      )
    }}
  />
)

RabbitHole.defaultProps = {
  photoOneAlt: `A photo from our road trip.`,
  photoTwoAlt: `A photo from our road trip.`,
  photoThreeAlt: `A photo from our road trip.`,
}

export default RabbitHole
