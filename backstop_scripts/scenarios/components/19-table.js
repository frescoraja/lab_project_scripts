var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  folder: testName,
  label: 'UI-demo components - table',
  url: 'http:localhost:9000/components/table',
  hideSelectors: [],
  removeSelectors: [
    'div[data-reactid=".0.0"]',
    'div[data-reactid=".0.2"]',
    'div[data-reactid=".0.1.0.0"]', // component list sidebar
    '.demo-doc' // 'view code' button
  ],
  selectors: [
  '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > table', // horizontal table
  '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(2) > article > div > table', // vertical table
  '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(3) > article > div > table', // highlight table
  '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(5) > article > div > table' // two dimensional table with group
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: null
}