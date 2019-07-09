import React from "react";
import styled from "styled-components";
import SycnIcon from "../images/sync-solid.svg";

const Spinner = () => <Rotate src={SycnIcon} alt="Loading" />;

const Rotate = styled.img`
	animation: spin 2s linear infinite;
	height: 25px;
	width: 25px;
	display: block;
	margin: 0 auto;
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;

export default Spinner;
