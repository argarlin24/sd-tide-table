import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Current } from "./styles";

const TableData = ({ prediction, highlight }) => {
	const TIME = moment(prediction.t, "YYYYMMDD HH:mm").format("MM/DD hh:mm a");
	const TIDE_LEVEL = Number.parseFloat(prediction.v).toFixed(2);
	const HILO = prediction.type;
	const CURRENT = moment().format("MMDD") === moment(prediction.t, "YYYYMMDD HH:mm").format("MMDD");

	return (
		<>
			{CURRENT && highlight ? (
				<>
					<Current>{TIME}</Current>
					<Current>{`${TIDE_LEVEL} ft`}</Current>
					<Current>{HILO}</Current>
				</>
			) : (
				<>
					<td>{TIME}</td>
					<td>{`${TIDE_LEVEL} ft`}</td>
					<td>{HILO}</td>
				</>
			)}
		</>
	);
};

TableData.propTypes = {
	prediction: PropTypes.object.isRequired,
};

export default TableData;
