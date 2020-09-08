const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/reedmacdonald/gatsby-intro/src/pages/about.js"))),
  "component---src-pages-contact-mdx": hot(preferDefault(require("/Users/reedmacdonald/gatsby-intro/src/pages/contact.mdx"))),
  "component---src-pages-exclusives-js": hot(preferDefault(require("/Users/reedmacdonald/gatsby-intro/src/pages/exclusives.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/reedmacdonald/gatsby-intro/src/pages/index.js"))),
  "component---src-templates-netlify-js": hot(preferDefault(require("/Users/reedmacdonald/gatsby-intro/src/templates/netlify.js"))),
  "component---src-templates-netlify-terms-js": hot(preferDefault(require("/Users/reedmacdonald/gatsby-intro/src/templates/netlifyTerms.js")))
}

