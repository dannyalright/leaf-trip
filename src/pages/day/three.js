import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Img from "gatsby-image"
import DayHeader from "../../components/DayHeader"
import DaySection from "../../components/DaySection"
import DayFooter from "../../components/dayFooter"
import SubheaderText from "../../components/SubheaderText"

import TwoLandscapeVerticalStaggered from "../../components/gallery/TwoLandscapeVerticalStaggered"
import TwoPortraitHorizontalStaggered from "../../components/gallery/TwoPortraitHorizontalStaggered"
import OneCrooked from "../../components/gallery/OneCrooked"

import DividerLine from "../../components/dividers/DividerLine"

const DayThreeThemeHex = "E7AC7D"
const DayThreeTextHex = "070504"

const DayThreePage = ({ data }) => (
  <Layout pageHex={DayThreeThemeHex}>
    {/* Intro */}
    <DayHeader
      backgroundHex={DayThreeThemeHex}
      textHex={DayThreeTextHex}
      dayNumber={3}
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
      <Img
        fixed={data.sun.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
        draggable={false}
        imgStyle={{
          mixBlendMode: `darken`,
        }}
      />
      <Img
        fluid={data.dannyPacking.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
        style={{
          maxWidth: `80%`,
        }}
      />

      <p>Packing the car after a night at the Super 8. A quick breakfast.</p>
    </DaySection>

    <DaySection
      backgroundHex="10f590"
      time="10:00 AM"
      destination="Roanoke, VA"
    >
      <Img
        fluid={data.roanoke.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />

      <p style={{ textAlign: `right` }}>
        A first glimpse of what charging could be for small town—downtown!
      </p>

      <SubheaderText>
        The city felt like it was frozen in time—in the best way possible.
      </SubheaderText>

      <SubheaderText align="center">
        The list of things we’d do next time is too long...
      </SubheaderText>

      <OneCrooked photoFile="art-museum-roanoke.png" photoAlt="TODO" />

      <ul
        style={{
          textAlign: `center`,
          listStyleType: `none`,
          paddingLeft: `0`,
        }}
      >
        <li>Art Museum</li>
        <li>Roanoke Hotel</li>
        <li>Winston Link Museum</li>
      </ul>

      <DividerLine />

      <SubheaderText align="right">
        Did you know Roanoke is also home to Black Dog Salvage?
      </SubheaderText>

      <TwoLandscapeVerticalStaggered
        photoOneFile="howard-johnsons.jpg"
        photoOneAlt="TODO"
        photoTwoFile="black-dog-inside.jpg"
        photoTwoAlt="TODO"
      />

      <p>AKA American Salvage from TV.</p>
      <p>I couldn’t find Danny. Here he is chatting with the cutest old man.</p>

      <TwoPortraitHorizontalStaggered
        photoOneFile="roanoke-star.jpg"
        photoOneAlt="TODO"
        photoTwoFile="danny-lexi-star.jpg"
        photoTwoAlt="TODO"
      />

      <p
        style={{
          textAlign: `center`,
        }}
      >
        <strong>Fun Fact:</strong> Christmas Tree decoration tidbits (Lexi to
        fill this out more).
      </p>

      <DividerLine />
    </DaySection>
    <DayFooter />
  </Layout>
)

export const query = graphql`
  query {
    roanoke: file(relativePath: { eq: "dayThree/roanoke.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dannyPacking: file(relativePath: { eq: "dayThree/danny-packing.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sun: file(relativePath: { eq: "doodles/sun.jpg" }) {
      childImageSharp {
        fixed(width: 56) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    squiggle: file(relativePath: { eq: "doodles/squiggle.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DayThreePage
