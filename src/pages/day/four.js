import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Section from "../../components/section"
import DayFooter from "../../components/dayFooter"

const DayFourPage = ({ data }) => (
  <Layout>
    {/* Intro */}
    <Section backgroundHex="0000ff" textHex="ffffff">
      <SEO title="Day 4" />
      <h1>Day Four</h1>
      <h2>08/24</h2>
      <h3>VA to NC</h3>
      <p>
        Roanoke, speeding tickets, Blue Ridge Parkway, Boone, and beers in
        Asheville.
      </p>
      <iframe
        title="dayThreeSong"
        src="https://open.spotify.com/embed/track/1opdGcwQmRmi7UsfgVqMW2"
        width="306"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        style={{
          maxWidth: `100%`,
        }}
      ></iframe>
    </Section>
    {/* Leaving motel */}
    <Section backgroundHex="00ff00">
      <h2>Daleville, VA</h2>
      <h2>8:00am</h2>
      <p>Packing the car after a night at the Super 8. A quick breakfast.</p>
    </Section>

    <Section backgroundHex="10f590">
      <h2>Roanoke, VA</h2>
      <h2>10:00am</h2>
    </Section>
    <DayFooter />
  </Layout>
)
export default DayFourPage