import React from "react";
import PropTypes from "prop-types";

import GlobalStyle from "../styles/globalstyle";
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Header>
				<Navigation />
			</Header>
			<div>
				<main>{children}</main>
			</div>
			<Footer>
				<p>
					Data provided by NOAA:
					<a href="https://tidesandcurrents.noaa.gov/api/" target="_blank" rel="noopener noreferrer">
						&nbsp;CO-OPS Data API
					</a>
				</p>
			</Footer>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
