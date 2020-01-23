import React from "react";
import { Link } from "gatsby";
import { NavWrapper, NavItems, NavLink } from "./styles";

const Navigation = () => (
	<NavWrapper>
		<NavLink href="#">
			<Link to="/">Daily</Link>
		</NavLink>
		<NavItems>
			<NavLink className="innerLink">
				<Link to="/monthly-tides/">Monthly</Link>
			</NavLink>
		</NavItems>
	</NavWrapper>
);

export default Navigation;
