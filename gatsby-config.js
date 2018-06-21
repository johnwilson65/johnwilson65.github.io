module.exports = {
  siteMetadata: {
    title: 'Castle Electrical Services Ltd',
    siteUrl: 'http://castle-electrical.org.uk'
  },
  plugins: [
   {
   	 resolve: `gatsby-source-filesystem`,
   	 options: {
   	 	name: `img`,
   	 	path: `${__dirname}/src/img/`
   	 }
   },
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      path:`${__dirname}/src/markdown/`,
      name: "markdown-pages",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Castle Electrical Services Ltd",
        short_name: "Castle Electrical",
        start_url: "/",
        background_color: "#C1272D",
        theme_color: "#C1272D",
        display: "minimal-ui",
        icon:"src/img/icon.png",
      }
   },
   {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/img/icon-1500x1500.png",
      injectHTML: true,
      icons: {
        android: false,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        window: false
      }
    }
   },
   'gatsby-transformer-sharp',
   'gatsby-plugin-sharp',
   'gatsby-transformer-remark',
   'gatsby-plugin-react-helmet',
   'gatsby-plugin-styled-jsx',
   'gatsby-plugin-sitemap',
   'gatsby-plugin-offline'
  ],
}
