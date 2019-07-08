import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DailyTide from "../components/dailytide";
import PageTitle from "../components/pagetitle";

const IndexPage = () => (
	<Layout>
		<SEO title="San Diego Tides Today" />
		<PageTitle>Today's Tides</PageTitle>
		<DailyTide />
	</Layout>
);

export default IndexPage;
