import React, { Component } from "react";
import db from "../db";
import moment from "moment";
import Table from "./table";
import Spinner from "../elements/spinner";
import Fade from "react-reveal/Fade";

class MonthlyTide extends Component {
	state = {
		tideData: null,
	};
	componentDidMount() {
		this.checkStatus();
	}

	componentDidUpdate(prevProps) {
		if (this.props.region !== prevProps.region) {
			this.checkStatus();
		}
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
				`https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=${BEGIN}&end_date=${END}&datum=MLLW&station=${
					this.props.region
				}&time_zone=lst_ldt&units=english&interval=hilo&format=json`
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
			id: this.props.region,
			timestamp: moment().format("MM"),
			data: monthlyTide,
		});
	}

	checkStatus() {
		db.table("monthlyTide").get({ id: this.props.region }, (tideData) => {
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
					<Fade duration={5000}>
						<Table data={this.state.tideData} />
					</Fade>
				) : (
					<Fade>
						<Spinner />
					</Fade>
				)}
			</div>
		);
	}
}

export default MonthlyTide;
