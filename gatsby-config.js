module.exports = {
  siteMetadata: {
    title: `CtrlAltDylan`,
    description: `JS Dev && Synthesizer Enthusiast`,
    author: `@its-dgreen`,
    siteUrl: `https://www.ctrlaltdylan.com/`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: 'ctrlaltdylan',
            output: 'rss.xml',
            query: `
            {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  html
                  frontmatter {
                    title
                    date
                    slug
                    description
                  }
                }
              }
            }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: `${site.siteMetadata.siteUrl}/posts/${node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/posts/${node.frontmatter.slug}`,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
          },
        ],
      },
    },
  ],
};
