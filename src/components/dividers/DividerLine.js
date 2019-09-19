import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DividerLine = () => {
  const data = useStaticQuery(graphql`
    query {
      line: file(relativePath: { eq: "doodles/line.jpg" }) {
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
      fluid={data.line.childImageSharp.fluid}
      alt="A squiggly line!"
      draggable={false}
      style={{
        maxWidth: `60%`,
        margin: `3rem auto`,
      }}
      imgStyle={{
        mixBlendMode: `darken`,
      }}
    />
  )
}

export default DividerLine
