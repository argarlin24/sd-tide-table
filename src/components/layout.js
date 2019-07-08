import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
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
      <Footer>
        <p>
          Data provided by NOAA:
          <a href="https://tidesandcurrents.noaa.gov/api/" target="_blank">
            CO-OPS Data API
          </a>
        </p>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
