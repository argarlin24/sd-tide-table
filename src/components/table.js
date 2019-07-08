import React from "react"
import styled from "styled-components"
import moment from "moment"

const Table = props => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th scope="col">Date/Time</th>
          <th scope="col">Height</th>
          <th scope="col">High/Low</th>
        </tr>
        {props.data.predictions.map((prediction, index) => (
          <tr>
            <td>
              {moment(prediction.t, "YYYYMMDD HH:mm").format("MM/DD hh:mm a")}
            </td>
            <td>{`${Number.parseFloat(prediction.v).toFixed(2)} ft`}</td>
            <td>{prediction.type}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 50%;
  margin: 0 auto;
  & th,
  td {
    text-align: center;
  }
`

export default Table
