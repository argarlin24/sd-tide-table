import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const Current = styled.td`
	color: #4bc0c0;
`;

const TableData = (props) => {
	const TIME = moment(props.prediction.t, "YYYYMMDD HH:mm").format("MM/DD hh:mm a");
	const TIDE_LEVEL = Number.parseFloat(props.prediction.v).toFixed(2);
	const HILO = props.prediction.type;

	if (moment().format("MMDD") === moment(props.prediction.t, "YYYYMMDD HH:mm").format("MMDD")) {
		return (
			<>
				<Current>{TIME}</Current>
				<Current>{`${TIDE_LEVEL} ft`}</Current>
				<Current>{HILO}</Current>
			</>
		);
	} else {
		return (
			<>
				<td>{TIME}</td>
				<td>{`${TIDE_LEVEL} ft`}</td>
				<td>{HILO}</td>
			</>
		);
	}
};

TableData.propTypes = {
	prediction: PropTypes.object.isRequired,
};

export default TableData;
