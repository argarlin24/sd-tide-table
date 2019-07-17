import React, { Component } from "react";
import db from "../db";
import moment from "moment";
import Table from "./table";
import Spinner from "../elements/spinner";

class MonthlyTide extends Component {
	state = {
		tideData: null,
	};
	componentDidMount() {
		this.checkStatus();
	}

	async query() {
		//Formatted Time Variables
		const BEGIN = moment()
			.startOf("month")
			.format("YYYYMMDD");

		const END = moment()
			.endOf("month")
			.format("YYYYMMDD");

		try {
			const res = await fetch(
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${BEGIN}&end_date=${END}&datum=MLLW&station=TWC0405&time_zone=lst_ldt&units=english&interval=hilo&format=json`
			);
			const data = await res.json();
			this.setState({
				tideData: data,
				loaded: true,
			});
			this.updateDB();
		} catch (error) {
			console.log(error);
		}
	}

	updateDB() {
		const monthlyTide = this.state.tideData;
		db.table("monthlyTide").put({
			id: 1,
			timestamp: moment().format("MM"),
			data: monthlyTide,
		});
	}

	checkStatus() {
		db.table("monthlyTide").get({ id: 1 }, (tideData) => {
			const currentMonth = moment().format("MM");
			if (tideData === undefined || tideData.timestamp !== currentMonth) {
				this.query();
			} else {
				this.setState({ tideData: tideData.data });
			}
		});
	}

	render() {
		return (
			<div>
				{this.state.tideData ? (
					<Table data={this.state.tideData} />
				) : (
					<Spinner />
				)}
			</div>
		);
	}
}

export default MonthlyTide;
