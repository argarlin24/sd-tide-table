import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
