import React from "react";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MonthlyTide from "../components/monthlytide";
import PageTitle from "../elements/pagetitle";
import Region from "../components/region";

const SecondPage = () => (
	<Layout>
		<SEO title="Monthly Tides" />
		<PageTitle>{`${moment().format("MMMM YYYY")} Tides`}</PageTitle>
		<Region>
			<MonthlyTide />
		</Region>
	</Layout>
);

export default SecondPage;
