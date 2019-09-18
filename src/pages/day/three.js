import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Img from "gatsby-image"
import DayHeader from "../../components/DayHeader"
import DaySection from "../../components/DaySection"
import DayFooter from "../../components/dayFooter"

import SubheaderText from "../../components/SubheaderText"

const DayThreePage = ({ data }) => (
  <Layout>
    {/* Intro */}
    <DayHeader
      backgroundHex="E7AC7D"
      textHex="000000"
      dayNumber="3"
      dayOfWeek="Saturday"
      date="08/24"
      origin="VA"
      destination="NC"
      introduction="Roanoke, speeding tickets, Blue Ridge Parkway, Boone, and beers in Asheville."
    />
    {/* Leaving motel */}
    <DaySection
      backgroundHex="C8ACD6"
      time="08:00 AM"
      destination="Daleville, VA"
    >
      <p>Packing the car after a night at the Super 8. A quick breakfast.</p>
    </DaySection>

    <DaySection
      backgroundHex="10f590"
      time="10:00 AM"
      destination="Roanoke, VA"
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
      <p>A first glimpse of what charging could be for small town—downtown!</p>
      <SubheaderText>
        The city felt like it was frozen in time—in the best way possible.
      </SubheaderText>

      <SubheaderText align="center">
        The list of things we’d do next time is too long...
      </SubheaderText>

      <SubheaderText align="right">
        Did you know Roanoke is also home to Black Dog Salvage?
      </SubheaderText>
    </DaySection>
    <DayFooter />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "dayThree/roanoke.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DayThreePage
