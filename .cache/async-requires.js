// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-mdx": () => import("./../../../src/pages/contact.mdx" /* webpackChunkName: "component---src-pages-contact-mdx" */),
  "component---src-pages-exclusives-js": () => import("./../../../src/pages/exclusives.js" /* webpackChunkName: "component---src-pages-exclusives-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-netlify-js": () => import("./../../../src/templates/netlify.js" /* webpackChunkName: "component---src-templates-netlify-js" */),
  "component---src-templates-netlify-terms-js": () => import("./../../../src/templates/netlifyTerms.js" /* webpackChunkName: "component---src-templates-netlify-terms-js" */)
}

