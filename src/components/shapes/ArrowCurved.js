import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ArrowCurved = () => {
  const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "doodles/arrow.jpg" }) {
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
      fluid={data.arrow.childImageSharp.fluid}
      alt="An arrow."
      draggable={false}
      style={{ marginLeft: `60%`, maxWidth: `100px` }}
      imgStyle={{
        mixBlendMode: `darken`,
        transform: `rotate(96deg)`,
      }}
    />
  )
}

export default ArrowCurved
