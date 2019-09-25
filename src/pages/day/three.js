import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Img from "gatsby-image"
import DayHeader from "../../components/DayHeader"
import DaySection from "../../components/DaySection"
import DayFooter from "../../components/dayFooter"
import SubheaderText from "../../components/SubheaderText"

import TwoLandscapeVerticalStaggered from "../../components/gallery/TwoLandscapeVerticalStaggered"
import ThreeLandscapeVerticalStaggered from "../../components/gallery/ThreeLandscapeVerticalStaggered"
import TwoPortraitHorizontalStaggered from "../../components/gallery/TwoPortraitHorizontalStaggered"
import OneCrooked from "../../components/gallery/OneCrooked"
import OneFlashy from "../../components/gallery/OneFlashy"
import RabbitHole from "../../components/gallery/RabbitHole"
import OnePortraitLeftArrowRight from "../../components/gallery/OnePortraitLeftArrowRight"
import OneFeatured from "../../components/gallery/OneFeatured"
import FourUpFlat from "../../components/gallery/FourUpFlat"

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
      <div class="container-large">
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
      </div>
    </DaySection>

    {/* In Roanoke */}
    <DaySection
      backgroundHex="FFE297"
      time="10:00 AM"
      destination="Roanoke, VA"
    >
      <div class="container-medium">
        <OneFeatured photoFile="roanoke/danny-leaning" photoAlt="TODO">
          <p style={{ textAlign: `right` }}>
            A first glimpse of what charging could be for small town—downtown!
          </p>
        </OneFeatured>
      </div>

      {/* Exploring Ronaoke */}
      <div class="container-medium">
        <SubheaderText>
          The city felt like it was frozen in time—in the best way possible.
        </SubheaderText>

        <FourUpFlat
          photoOneFile="roanoke/hc-coffee"
          photoOneAlt="TODO"
          photoTwoFile="roanoke/lexi-camera"
          photoTwoAlt="TODO"
          photoThreeFile="roanoke/lexi-sign"
          photoThreeAlt="TODO"
          photoFourFile="roanoke/biscuit-wall"
          photoFourAlt="TODO"
        />
      </div>

      <div class="container-small">
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

      <div class="container-medium">
        <SubheaderText align="right">
          Did you know Roanoke is also home to Black Dog Salvage?
        </SubheaderText>

        <TwoLandscapeVerticalStaggered
          photoOneFile="howard-johnsons"
          photoOneAlt="TODO"
          photoTwoFile="black-dog-inside"
          photoTwoAlt="TODO"
        />
        <p>AKA American Salvage from TV.</p>
      </div>

      <div class="container-large">
        <OnePortraitLeftArrowRight
          photoFile="danny-black-dog-man"
          photoAlt="TODO"
          text="I couldn’t find Danny. Here he is chatting with the cutest old man."
        />
      </div>

      {/* Roanoke Star */}
      <div class="container-small">
        <OneFlashy photoFile="roanoke-star-cam" photoAlt="TODO" />
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

      <div class="container-medium">
        <TwoPortraitHorizontalStaggered
          photoOneFile="roanoke-star"
          photoOneAlt="TODO"
          photoTwoFile="danny-lexi-star"
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
        photoOneFile="bathroom1"
        photoOneAlt="TODO"
        photoTwoFile="bathroom2"
        photoTwoAlt="TODO"
        photoThreeFile="bathroom3"
        photoThreeAlt="TODO"
      />
    </DaySection>

    {/* In Wytheville */}
    <DaySection backgroundHex="FF9C9C" time="TODO" destination="Wytheville, VA">
      <div class="container-medium">
        <OneFeatured photoFile="wytheville/danny-car" photoAlt="TODO">
          <p style={{ textAlign: `center` }}>
            Since it was a slow charge we had time to kill. Lucky for us,
            Wythesville is the home of the big pencil so we took a walk to town!
          </p>
        </OneFeatured>
      </div>

      <div class="container-medium">
        <ThreeLandscapeVerticalStaggered
          photoOneFile="howard-johnsons"
          photoOneAlt="TODO"
          photoTwoFile="black-dog-inside"
          photoTwoAlt="TODO"
          photoThreeFile="black-dog-inside"
          photoThreeAlt="TODO"
        />
      </div>

      <div class="container-large">
        <OnePortraitLeftArrowRight
          photoFile="wytheville/self-portrait"
          photoAlt="TODO"
          text="Watch your Step? It should have said watch your SPEED..."
        />
      </div>
    </DaySection>

    {/* Driving to Asheville */}
    {/* In Wytheville */}
    <DaySection
      backgroundHex="FFFFFF"
      time="TODO"
      destination="Blue Ridge Parkway, VA"
    >
      <div class="container-large">
        <OneFeatured photoFile="leah-forest" photoAlt="TODO">
          <p style={{ textAlign: `right` }}>
            Well, we had to stop for a restroom break. The middle of the Blue
            Ridge Mountains seemed like the right place.
          </p>
        </OneFeatured>
      </div>

      <div class="container-small">
        <OneFeatured photoFile="common-good" photoAlt="TODO">
          <p style={{ textAlign: `center` }}>
            <strong>Main Street highlight:</strong>
            <br></br>Common Good Co.
          </p>
        </OneFeatured>
      </div>
    </DaySection>
    <DayFooter />
  </Layout>
)

export const query = graphql`
  query {
    sun: file(relativePath: { eq: "doodles/sun.jpg" }) {
      childImageSharp {
        fixed(width: 56) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dannyPacking: file(relativePath: { eq: "day-three/danny-packing.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DayThreePage
