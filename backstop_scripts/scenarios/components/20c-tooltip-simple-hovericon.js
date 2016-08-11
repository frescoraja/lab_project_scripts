var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  folder: testName,
  label: 'UI-demo components - tooltip - simple',
  url: 'http:localhost:9000/components/tooltip',
  hideSelectors: [
    '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(2)' //tooltip custom
  ],
  removeSelectors: [
    'div[data-reactid=".0.0"]',
    'div[data-reactid=".0.2"]',
    'div[data-reactid=".0.1.0.0"]', // component list sidebar
    '.demo-doc' // 'view code' button
  ],
  selectors: [
    '#content > div > div.rwd-content > div > div:nth-child(2)' //tooltips
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: testName
}