import React from "react"
import styled from "styled-components"

const Table = props => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th scope="col">Date/Time</th>
          <th scope="col">Height - ft.</th>
          <th scope="col">High/Low</th>
        </tr>
        {props.data.predictions.map(prediction => (
          <tr>
            {Object.values(prediction).map(value => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 50%;
  margin: 0 auto;
`

export default Table
