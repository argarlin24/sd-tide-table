import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DailyGraph from "../components/dailygraph"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DailyGraph />
  </Layout>
)

export default IndexPage
