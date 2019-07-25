import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DailyTide from "../components/dailytide";
import PageTitle from "../elements/pagetitle";
import SubHeading from "../elements/subheading";

const IndexPage = () => (
	<Layout>
		<SEO title="San Diego Tides Today" />
		<PageTitle>San Diego Tides</PageTitle>
		<SubHeading>Today's Tides</SubHeading>
		<DailyTide />
	</Layout>
);

export default IndexPage;
