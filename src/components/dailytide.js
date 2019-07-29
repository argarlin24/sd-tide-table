import React, { Component } from "react";
import db from "../db";
import moment from "moment";
import styled from "styled-components";
import LineChart from "./linechart";
import Table from "./table";
import Spinner from "../elements/spinner";

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

class DailyTide extends Component {
	state = {
		tideData: null,
		formattedData: [],
	};
	componentDidMount() {
		this.checkStatus();
	}

	async query() {
		const today = moment().format("YYYYMMDD");
		try {
			const res = await fetch(
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${today}&end_date=${today}&datum=MLLW&station=TWC0405&time_zone=lst_ldt&units=english&interval=hilo&format=json`
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
		db.table("dailyTide").get({ id: 1 }, (tideData) => {
			const today = moment().format("MMDD");
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

export default DailyTide;
