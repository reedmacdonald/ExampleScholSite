module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/reedmacdonald/gatsby-intro/node_modules/gatsby-remark-images","id":"580fd6f0-a0f4-5cb7-ac28-2bea65acb525","name":"gatsby-remark-images","version":"3.3.25","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{"default":"/Users/reedmacdonald/gatsby-intro/src/components/layout.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images"}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
