var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  label: 'UI-demo - landing page',
  folder: testName,
  url: 'http:localhost:9000',
  hideSelectors: [],
  removeSelectors: [],
  selectors: [
    '#content', // entire page content
    'div[data-reactid=".0.0"]', // logo navbar
    'section[data-reactid=".0.1.0"]', // jumbotron title banner
    'div.rwd-content', // vendor/technologies content
    'div[data-reactid=".0.2"]' // logo footer
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: null
}