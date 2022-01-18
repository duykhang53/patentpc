require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `patentpc`,
    description: `Lawyer Website`,
    author: `Bao Tran`,
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WORDPRESS_URL,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: process.env.WORDPRESS_URL,
      },
    },
    "gatsby-source-fontawesome",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdf/`,
      },
    }
  ],
};
