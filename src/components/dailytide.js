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
		hiLoData: null,
		sixMinData: null,
	};
	componentDidMount() {
		this.checkStatus();
	}

	componentDidUpdate(prevProps) {
		if (this.props.region !== prevProps.region) {
			this.checkStatus();
		}
	}

	async hiLoQuery() {
		const today = moment().format("YYYYMMDD");
		try {
			const res = await fetch(
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${today}&end_date=${today}&datum=MLLW&station=${
					this.props.region
				}&time_zone=lst_ldt&units=english&interval=hilo&format=json`
			);
			const data = await res.json();
			this.setState({
				hiLoData: data,
			});
			this.updateDB();
		} catch (error) {
			console.log(error);
		}
	}

	async completeLevelQuery() {
		const today = moment().format("YYYYMMDD");
		try {
			const res = await fetch(
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${today}+00%3A00&end_date=${today}+23%3A00&datum=MLLW&station=${
					this.props.region
				}&time_zone=lst_ldt&units=english&format=json`
			);
			const data = await res.json();
			this.setState({
				sixMinData: data,
			});
			this.updateDB();
		} catch (error) {
			console.log(error);
		}
	}

	updateDB() {
		const dailyTide = this.state.hiLoData;
		const sixMinTide = this.state.sixMinData;

		db.table("dailyTide").put({
			id: this.props.region,
			timestamp: moment().format("MMDD"),
			data: dailyTide,
		});

		db.table("sixMinTide").put({
			id: this.props.region,
			timestamp: moment().format("MMDD"),
			data: sixMinTide,
		});
	}

	checkStatus() {
		db.table("dailyTide").get({ id: this.props.region }, (hiLoData) => {
			const today = moment().format("MMDD");
			if (hiLoData === undefined || hiLoData.timestamp !== today) {
				this.hiLoQuery();
			} else {
				this.setState({
					hiLoData: hiLoData.data,
				});
			}
		});

		db.table("sixMinTide").get({ id: this.props.region }, (sixMinData) => {
			const today = moment().format("MMDD");
			if (sixMinData === undefined || sixMinData.timestamp !== today) {
				this.completeLevelQuery();
			} else {
				this.setState({
					sixMinData: sixMinData.data,
				});
			}
		});
	}

	render() {
		return (
			<>
				<GraphWrapper>
					{this.state.sixMinData ? (
						<LineChart
							sixMinData={this.state.sixMinData}
							hiLoData={this.state.hiLoData}
						/>
					) : (
						<Spinner />
					)}
				</GraphWrapper>
				<TableWrapper>
					{this.state.hiLoData ? (
						<Table data={this.state.hiLoData} />
					) : (
						<Spinner />
					)}
				</TableWrapper>
			</>
		);
	}
}

export default DailyTide;
