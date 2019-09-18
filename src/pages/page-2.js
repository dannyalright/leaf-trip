import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>How'd we get the car?</h1>
    <p>
      We were not approach by or paid by Nissan to do this trip. Nissan provided
      us with the car for free after we (Lexi and Danny) reached out about our
      plans.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
