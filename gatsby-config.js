module.exports = {
	siteMetadata: {
		title: `San Diego Tide Data`,
		description: `Daily and monthly tide data for San Diego, California`,
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
				name: `San Diego Tides`,
				short_name: `SD-Tides`,
				start_url: `/`,
				background_color: `#373740`,
				theme_color: `#4bc0c0`,
				display: `standalone`,
				icon: `src/images/wave-icon.svg`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`,
	],
};
