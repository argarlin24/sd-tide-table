module.exports = {
	siteMetadata: {
		title: `Southern California Tide Data`,
		description: `Daily and monthly tide data for Southern California`,
		author: `Adam Garling`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Southern California Tide Data`,
				short_name: `Socal Tides`,
				start_url: `/`,
				background_color: `#4bc0c0`,
				theme_color: `#4bc0c0`,
				display: `standalone`,
				icon: `src/images/wave-icon.svg`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`,
	],
};
