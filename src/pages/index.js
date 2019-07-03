import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DailyTide from "../components/dailytide"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DailyTide />
  </Layout>
)

export default IndexPage
