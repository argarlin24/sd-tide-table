import React from "react";
import PropTypes from "prop-types";
import { StyledTable } from "./styles";
import TableData from "../tabledata";

const Table = ({ data, highlight }) => {
	return (
		<StyledTable>
			<tbody>
				<tr>
					<th scope="col">Date/Time</th>
					<th scope="col">Height</th>
					<th scope="col">High/Low</th>
				</tr>
				{data.predictions.map((prediction, index) => {
					return (
						<tr key={index}>
							<TableData prediction={prediction} highlight={highlight} />
						</tr>
					);
				})}
			</tbody>
		</StyledTable>
	);
};

Table.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Table;
