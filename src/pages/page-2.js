import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MonthlyTide from "../components/monthlytide"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <MonthlyTide />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
