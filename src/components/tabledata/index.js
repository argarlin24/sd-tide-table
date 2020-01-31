import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { TD } from "./styles";

const TableData = ({ prediction, highlight }) => {
	const TIME = moment(prediction.t, "YYYYMMDD HH:mm").format("MM/DD hh:mm a");
	const TIDE_LEVEL = Number.parseFloat(prediction.v).toFixed(2);
	const HILO = prediction.type;
	const CURRENT = moment().format("MMDD") === moment(prediction.t, "YYYYMMDD HH:mm").format("MMDD");

	return (
		<>
			<TD current={CURRENT} highlight={highlight}>
				{TIME}
			</TD>
			<TD current={CURRENT} highlight={highlight}>{`${TIDE_LEVEL} ft`}</TD>
			<TD current={CURRENT} highlight={highlight}>
				{HILO}
			</TD>
		</>
	);
};

TableData.propTypes = {
	prediction: PropTypes.object.isRequired,
};

export default TableData;
