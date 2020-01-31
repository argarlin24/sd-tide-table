import styled from "styled-components";

export const TD = styled.td`
	color: ${(props) => (props.highlight && props.current ? "#3f51b5" : "#263238")};
`;
