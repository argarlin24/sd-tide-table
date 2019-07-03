import React from "react"

const Table = props => {
  return (
    <table>
      <tbody>
        {props.data.predictions.map(prediction => (
          <tr>
            {Object.values(prediction).map(value => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
