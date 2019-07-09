import React, { Component } from "react";
import moment from "moment";
import Table from "./table";
import Spinner from "../elements/spinner";

class MonthlyTide extends Component {
	state = {
		tideData: null,
	};
	componentDidMount() {
		this.query();
	}

	async query() {
		const begin = moment()
			.startOf("month")
			.format("YYYYMMDD");
		const end = moment()
			.endOf("month")
			.format("YYYYMMDD");
		try {
			const res = await fetch(
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${begin}&end_date=${end}&datum=MLLW&station=TWC0405&time_zone=lst_ldt&units=english&interval=hilo&format=json`
			);
			const data = await res.json();
			this.setState({
				tideData: data,
				loaded: true,
			});
		} catch (error) {
			console.log(error);
		}
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
