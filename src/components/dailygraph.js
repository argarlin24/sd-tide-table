import React, { Component } from "react"
import moment from "moment"
import LineChart from "./linechart"

class DailyGraph extends Component {
  state = {
    tideData: null,
  }
  componentDidMount() {
    this.query()
  }

  async query() {
    const begin = moment().format("YYYYMMDD")
    // const end = moment()
    //   .add(2, "days")
    //   .format("YYYYMMDD")
    try {
      const res = await fetch(
        `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${begin}&end_date=${begin}&datum=MLLW&station=TWC0405&time_zone=lst_ldt&units=english&interval=hilo&format=json`
      )
      const data = await res.json()
      this.setState({
        tideData: data,
        loaded: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        {this.state.tideData ? (
          <LineChart data={this.state.tideData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}

export default DailyGraph
