import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DailyTide from "../components/dailytide";
import PageTitle from "../elements/pagetitle";
import Region from "../components/region";

const IndexPage = () => (
	<Layout>
		<SEO title="Southern California Tides Today" />
		<PageTitle>Today's Tides</PageTitle>
		<Region>
			<DailyTide />
		</Region>
	</Layout>
);

export default IndexPage;
