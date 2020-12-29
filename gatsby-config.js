module.exports = {
  siteMetadata: {
    title: `CtrlAltDylan`,
    description: `JS Dev && Synthesizer Enthusiast`,
    author: `@its-dgreen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
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
        name: `ctrlaltdylan`,
        short_name: `ctrlaltdylan`,
        start_url: `/`,
        icon: `src/images/openforbusiness.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ['Cabana', 'Fox & Cat'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
  ],
};
