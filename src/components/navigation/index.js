import React from "react";
import { Link } from "gatsby";
import { NavWrapper, NavItems, NavLink, StyledLogo } from "./styles";
import Logo from "../../images/logo.svg";

const Navigation = () => (
	<NavWrapper>
		<Link to="/">
			<StyledLogo src={Logo} alt="Socal Tides" />
		</Link>
		<NavItems>
			<NavLink>
				<Link to="/">DAILY</Link>
			</NavLink>
			<NavLink>
				<Link to="/monthly-tides/">MONTHLY</Link>
			</NavLink>
		</NavItems>
	</NavWrapper>
);

export default Navigation;
