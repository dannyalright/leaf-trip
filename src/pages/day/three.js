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
import OneFlashy from "../../components/gallery/OneFlashy"
import RabbitHole from "../../components/gallery/RabbitHole"

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
        alt="TODO"
        draggable={false}
        imgStyle={{
          mixBlendMode: `darken`,
        }}
      />
      <Img
        fluid={data.dannyPacking.childImageSharp.fluid}
        alt="TODO"
        style={{
          maxWidth: `80%`,
        }}
      />

      <p>Packing the car after a night at the Super 8. A quick breakfast.</p>
    </DaySection>

    <DaySection
      backgroundHex="FFE297"
      time="10:00 AM"
      destination="Roanoke, VA"
    >
      <div
        class="hero-large"
        style={{
          marginTop: `3rem`,
          marginBottom: `rem`,
        }}
      >
        <Img fluid={data.roanoke.childImageSharp.fluid} alt="TODO" />
        <p style={{ textAlign: `right` }}>
          A first glimpse of what charging could be for small town—downtown!
        </p>
      </div>

      {/* Exploring Ronaoke */}
      <div class="hero-large">
        <SubheaderText>
          The city felt like it was frozen in time—in the best way possible.
        </SubheaderText>

        <div
          style={{
            display: `flex`,
            gap: `1rem`,
            flexWrap: `wrap`,
          }}
        >
          <Img
            style={{ flex: `2` }}
            fluid={data.hcCoffee.childImageSharp.fluid}
            alt="TODO"
          />
          <Img
            style={{ flex: `1` }}
            fluid={data.lexiWithCamera.childImageSharp.fluid}
            alt="TODO"
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
            fluid={data.lexiSign.childImageSharp.fluid}
            alt="TODO"
          />
          <Img
            style={{ flex: `2` }}
            fluid={data.biscuitSign.childImageSharp.fluid}
            alt="TODO"
          />
        </div>
      </div>

      <div class="hero-small">
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
      </div>

      <div class="hero-large">
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
      </div>

      <Img
        fluid={data.dannyBlackDogMan.childImageSharp.fluid}
        alt="TODO"
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
        <Img
          fixed={data.arrow.childImageSharp.fixed}
          alt="TODO"
          draggable={false}
          style={{ marginLeft: `60%` }}
          imgStyle={{
            mixBlendMode: `darken`,
            transform: `rotate(96deg)`,
          }}
        />
        <p style={{ display: `block`, textAlign: `right` }}>
          I couldn’t find Danny. Here he is chatting with the cutest old man.
        </p>
      </div>

      {/* Roanoke Star */}
      <div class="hero-small">
        <OneFlashy photoFile="roanoke-star-cam.jpg" photoAlt="TODO" />
        <p
          style={{
            textAlign: `center`,
            fontSize: `1.5rem`,
            marginBottom: `0`,
          }}
        >
          <em>Hey fam—we’re webcam stars!</em>
        </p>
        <p
          style={{
            textAlign: `center`,
            marginTop: `0.5rem`,
          }}
        >
          Yep, we did call our family for them to see us on the{" "}
          <a href="https://www.roanokeva.gov/1687/StarCam">webcam</a>.
        </p>
      </div>

      <div class="hero-large">
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
      </div>

      {/* Rabbit hole */}
      <RabbitHole
        photoOneFile="bathroom1.jpg"
        photoOneAlt="TODO"
        photoTwoFile="bathroom2.jpg"
        photoTwoAlt="TODO"
        photoThreeFile="bathroom3.jpg"
        photoThreeAlt="TODO"
      />
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
    dannyBlackDogMan: file(
      relativePath: { eq: "dayThree/danny-black-dog-man.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    biscuitSign: file(relativePath: { eq: "dayThree/biscuit-sign.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hcCoffee: file(relativePath: { eq: "dayThree/hc-coffee.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lexiSign: file(relativePath: { eq: "dayThree/lexi-sign.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lexiWithCamera: file(
      relativePath: { eq: "dayThree/lexi-with-camera.jpg" }
    ) {
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
    arrow: file(relativePath: { eq: "doodles/arrow.jpg" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default DayThreePage
