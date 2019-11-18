import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TableData from "./tabledata";

const StyledTable = styled.table`
	width: 50%;
	margin: 0 auto;
	& th,
	td {
		text-align: center;
	}
`;

const Table = (props) => {
	return (
		<StyledTable>
			<tbody>
				<tr>
					<th scope="col">Date/Time</th>
					<th scope="col">Height</th>
					<th scope="col">High/Low</th>
				</tr>
				{props.data.predictions.map((prediction, index) => {
					return (
						<tr key={index}>
							<TableData prediction={prediction} />
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
