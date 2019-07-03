import React, { Component } from "react"
import moment from "moment"
import styled from "styled-components"
import LineChart from "./linechart"
import Table from "./table"

class DailyTide extends Component {
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
      <>
        <GraphWrapper>
          {this.state.tideData ? (
            <LineChart data={this.state.tideData} />
          ) : (
            <p>Loading...</p>
          )}
        </GraphWrapper>
        <TableWrapper>
          {this.state.tideData ? (
            <Table data={this.state.tideData} />
          ) : (
            <p>Loading...</p>
          )}
        </TableWrapper>
      </>
    )
  }
}

const GraphWrapper = styled.div`
  width: 75%;
  height: auto;
  margin: 0 auto;
`

const TableWrapper = styled.div`
  padding-top: 60px;
`

export default DailyTide
