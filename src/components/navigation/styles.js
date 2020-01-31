import styled from "styled-components";

export const NavWrapper = styled.div`
	display: flex;
	font-family: sans-serif;
	padding: 15px 30px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	align-content: center;
	justify-content: space-between;

	@media (max-width: 414px) {
		padding: 15px 15px;
	}
`;

export const NavItems = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavLink = styled.div`
	display: flex;
	padding-right: 15px;

	& a {
		display: block;
		text-decoration: none;
		color: #ffffff;
	}
`;

export const Flex = styled.div`
	display: flex;
`;

export const StyledLogo = styled.img`
	height: 50px;
	width: auto;
	margin-bottom: 0;
`;
