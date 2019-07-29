import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.div`
	display: flex;
	font-family: sans-serif;
	padding: 15px 30px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	align-content: center;
`;

const NavItems = styled.nav`
	display: flex;
	align-items: center;
`;

const NavLink = styled.div`
	padding-right: 30px;

	& a {
		display: block;
		text-decoration: none;
		color: #dddddd;
	}
`;

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
