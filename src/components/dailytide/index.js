import React, { Component } from "react";
import db from "../../db";
import moment from "moment";
import LineChart from "../linechart";
import Table from "../table";
import Spinner from "../../elements/spinner";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { GraphWrapper, TableWrapper } from "./styles";

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
				`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&begin_date=${today}&end_date=${today}&datum=MLLW&station=${this.props.region}&time_zone=lst_ldt&units=english&interval=hilo&application=socaltides&format=json`,
				{
					referrerPolicy: "origin-when-cross-origin",
				}
			);
			const data = await res.json();
			this.setState({
				hiLoData: data,
			});
			this.updateDB();
		} catch (error) {
			console.log("This daily is the hilo error:", error);
		}
	}

	async completeLevelQuery() {
		console.log("called");
		const today = moment().format("YYYYMMDD");
		try {
			const res = await fetch(
				`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&begin_date=${today}&end_date=${today}&datum=MLLW&station=${this.props.region}&time_zone=lst_ldt&units=english&application=socaltides&format=json`,
				{
					referrerPolicy: "origin-when-cross-origin",
				}
			);
			const data = await res.json();
			this.setState({
				sixMinData: data,
			});
			this.updateDB();
		} catch (error) {
			console.log("This daily is the complete level error:", error);
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
						<Zoom>
							<LineChart sixMinData={this.state.sixMinData} hiLoData={this.state.hiLoData} />
						</Zoom>
					) : (
						<Fade>
							<Spinner />
						</Fade>
					)}
				</GraphWrapper>
				<TableWrapper>
					{this.state.hiLoData ? (
						<Fade duration={5000}>
							<Table data={this.state.hiLoData} highlight={false} />
						</Fade>
					) : (
						<Spinner />
					)}
				</TableWrapper>
			</>
		);
	}
}

export default DailyTide;
