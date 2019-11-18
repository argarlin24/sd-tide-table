import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const Current = styled.td`
	color: #4bc0c0;
`;

const TableData = (props) => {
	if (
		moment().format("MMDD") ===
		moment(props.prediction.t, "YYYYMMDD HH:mm").format("MMDD")
	) {
		return (
			<>
				<Current>
					{moment(props.prediction.t, "YYYYMMDD HH:mm").format(
						"MM/DD hh:mm a"
					)}
				</Current>
				<Current>{`${Number.parseFloat(props.prediction.v).toFixed(
					2
				)} ft`}</Current>
				<Current>{props.prediction.type}</Current>
			</>
		);
	} else {
		return (
			<>
				<td>
					{moment(props.prediction.t, "YYYYMMDD HH:mm").format(
						"MM/DD hh:mm a"
					)}
				</td>
				<td>{`${Number.parseFloat(props.prediction.v).toFixed(
					2
				)} ft`}</td>
				<td>{props.prediction.type}</td>
			</>
		);
	}
};

TableData.propTypes = {
	prediction: PropTypes.object.isRequired,
};

export default TableData;
