import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import moment from "moment"

class LineChart extends Component {
  render() {
    console.log(this.props.data)
    //time string value parsed into standard local time
    const time = this.props.data.predictions.map(tide =>
      moment(tide.t.slice(11, 16), "HH:mm").format("hh:mm a")
    )
    // tide value mapped to array
    const tideValues = this.props.data.predictions.map(tide => tide.v)
    //chart config
    const data = {
      labels: time,
      datasets: [
        {
          label: "Tides",
          fill: false,
          lineTension: 0.4,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: tideValues,
        },
      ],
    }
    return <Line data={data} />
  }
}

export default LineChart
