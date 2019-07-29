import React from "react";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MonthlyTide from "../components/monthlytide";
import PageTitle from "../elements/pagetitle";

const SecondPage = () => (
	<Layout>
		<SEO title="Monthly Tides" />
		<PageTitle>{`${moment().format("MMMM YYYY")} Tides`}</PageTitle>
		<MonthlyTide />
	</Layout>
);

export default SecondPage;
