const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: `Inovexia`,
    title: `Demosoap`,
    description: `A Gatsby Shopify theme package built by Team-Innovexia for Team-Innovexia.`,
    short_title: `GISP`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-apollo-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
     {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: 'gatsby-plugin-tidio-chat',
      options: {
        tidioKey: process.env.TIDIOKEY,
        enableDuringDevelop: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose:false,
        // paginationSize: 250,
        // includeCollections: ["shop", "content"],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
      	typeName: 'Shopify',
        fieldName: 'shopify',
        url: `https://${process.env.SHOP_NAME}.myshopify.com/api/graphql`,
    	headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
        },
    	//refetchInterval: 60
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-theme`,
        short_name: `gatsby-shopify`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};