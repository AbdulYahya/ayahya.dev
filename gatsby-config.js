require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ob8h85wn`,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

if (process.env.CONTEXT === `production`) {
  const googleAnalyticsConfig = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_TRACKING_ID
    }
  }
  config.plugins.push(googleAnalyticsConfig)
}

modules.exports = config

// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-sanity`,
//       options: {
//         projectId: `ob8h85wn`,
//         dataset: process.env.SANITY_DATASET,
//         token: process.env.SANITY_TOKEN,
//         watchMode: true,
//         overlayDrafts: true,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     // this (optional) plugin enables Progressive Web App + Offline functionality
//     // To learn more, visit: https://gatsby.dev/offline
//     // 'gatsby-plugin-offline',
//   ],
// }
