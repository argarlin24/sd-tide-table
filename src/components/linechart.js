import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import moment from "moment";

//sets the font color of the graph
defaults.global.defaultFontColor = "#dddddd";

const LineChart = (props) => {
	//time string value parsed into standard local time
	const TIME = props.data.predictions.map((tide) =>
		moment(tide.t.slice(11, 16), "HH:mm").format("hh:mm a")
	);

	// tide value mapped to array
	const TIDE_VALUES = props.data.predictions.map((tide) => tide.v);

	const data = {
		labels: TIME,
		datasets: [
			{
				label: "Tide",
				fill: false,
				lineTension: 0.4,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderWidth: 2,
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 3,
				pointHitRadius: 10,
				data: TIDE_VALUES,
			},
		],
	};
	return <Line data={data} />;
};

export default LineChart;
