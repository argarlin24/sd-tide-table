import styled from "styled-components";

export const GraphWrapper = styled.div`
	width: 50%;
	height: auto;
	margin: 0 auto;
	background: #ffffff;
	padding: 32px;
	box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.05);
	border-radius: 4px;
	@media (max-width: 770px) {
		width: 85%;
		padding: 16px;
	}
`;

export const TableWrapper = styled.div`
	margin: 30px auto 0 auto;
	padding: 32px 0;
`;
