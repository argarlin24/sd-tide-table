import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MonthlyTide from "../components/monthlytide";
import PageTitle from "../components/pagetitle";

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<PageTitle>This Month's Tides</PageTitle>
		<MonthlyTide />
	</Layout>
);

export default SecondPage;
