import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import moment from "moment";

//sets the font color of the graph
defaults.global.defaultFontColor = "#dddddd";

const LineChart = (props) => {
	//time string value parsed into standard local time
	const SIX_TIME = props.sixMinData.predictions.map((tide) =>
		moment(tide.t.slice(11, 16), "HH:mm").format("hh:mm a")
	);

	// tide value mapped to array
	const SIX_TIDE_VALUES = props.sixMinData.predictions.map((tide) => Number.parseFloat(tide.v).toFixed(2));

	const data = {
		labels: SIX_TIME,
		datasets: [
			{
				label: "Tide",
				fill: true,
				lineTension: 0.04,
				backgroundColor: "rgba(63,81,181, 0.4)",
				borderWidth: 2,
				borderColor: "#3f51b5",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba#3f51b5",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 0,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "#3f51b5",
				pointHoverBorderColor: "#3f51b5",
				pointHoverBorderWidth: 2,
				pointRadius: 0,
				pointHitRadius: 10,
				data: SIX_TIDE_VALUES,
			},
		],
	};

	const legendOpts = {
		display: false,
	};

	const options = {
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			},
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						color: "rgba(0,0,0,0.25)",
					},
					ticks: {
						fontColor: "#263238",
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						color: "rgba(0,0,0,0.25)",
					},
					ticks: {
						display: true,
						autoSkip: true,
						maxTicksLimit: 12,
						fontColor: "#263238",
					},
				},
			],
		},
	};

	return <Line data={data} options={options} legend={legendOpts} />;
};

LineChart.propTypes = {
	sixMinData: PropTypes.object.isRequired,
};

export default LineChart;
