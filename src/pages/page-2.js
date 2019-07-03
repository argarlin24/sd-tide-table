import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MonthlyQuery from "../components/monthly"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <MonthlyQuery />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
