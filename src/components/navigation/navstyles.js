import styled from "styled-components";

export const NavWrapper = styled.div`
	display: flex;
	font-family: sans-serif;
	padding: 15px 30px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	align-content: center;
`;

export const NavItems = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavLink = styled.div`
	padding-right: 30px;

	& a {
		display: block;
		text-decoration: none;
		color: #dddddd;
	}
`;
