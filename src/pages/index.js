import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>3000 miles over 10 days in an electric vehicle.</p>

    <ul>
      <li>
        <Link to="/day/three/">Day 3</Link>
      </li>
      <li>
        <Link to="/page-2/">How'd we get the car?</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
