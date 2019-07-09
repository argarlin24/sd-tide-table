import React, { Component } from "react";
import db from "../db";
import moment from "moment";
import styled from "styled-components";
import LineChart from "./linechart";
import Table from "./table";
import Spinner from "../elements/spinner";

class DailyTide extends Component {
	state = {
		tideData: null,
		formattedData: [],
	};
	componentDidMount() {
		// this.query();
		this.checkStatus();
	}

	async query() {
		const begin = moment().format("YYYYMMDD");
		try {
			const res = await fetch(
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${begin}&end_date=${begin}&datum=MLLW&station=TWC0405&time_zone=lst_ldt&units=english&interval=hilo&format=json`
			);
			const data = await res.json();
			this.setState({
				tideData: data,
			});
			this.updateDB();
		} catch (error) {
			console.log(error);
		}
	}

	updateDB() {
		const dailyTide = this.state.tideData;
		db.table("dailyTide").put({
			id: 1,
			timestamp: moment().format("MMDD"),
			data: dailyTide,
		});
	}

	checkStatus() {
		console.log("called");
		db.table("dailyTide").get({ id: 1 }, (tideData) => {
			const today = moment().format("MMDD");
			console.log(tideData);
			if (tideData === undefined || tideData.timestamp !== today) {
				this.query();
			} else {
				this.setState({ tideData: tideData.data });
			}
		});
	}

	render() {
		return (
			<>
				<GraphWrapper>
					{this.state.tideData ? (
						<LineChart data={this.state.tideData} />
					) : (
						<Spinner />
					)}
				</GraphWrapper>
				<TableWrapper>
					{this.state.tideData ? (
						<Table data={this.state.tideData} />
					) : (
						<Spinner />
					)}
				</TableWrapper>
			</>
		);
	}
}

const GraphWrapper = styled.div`
	width: 50%;
	height: auto;
	margin: 0 auto;
	@media (max-width: 770px) {
		width: 75%;
	}
`;

const TableWrapper = styled.div`
	padding-top: 60px;
`;

export default DailyTide;
