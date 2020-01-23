import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DailyTide from "../components/dailytide/dailytide";
import PageTitle from "../elements/pagetitle";
import SubHeading from "../elements/subheading";
import Region from "../components/region/region";

const IndexPage = () => (
	<Layout>
		<SEO title="Southern California Tides Today" />
		<PageTitle>Southern California Tides</PageTitle>
		<SubHeading>Today's Tides</SubHeading>
		<Region>
			<DailyTide />
		</Region>
	</Layout>
);

export default IndexPage;
