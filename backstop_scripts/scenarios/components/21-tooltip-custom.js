var path = require('path'),
    output_dir = path.basename(__filename).split('.')[0];

module.exports = {
  folder: output_dir,
  label: 'UI-demo components - tooltip - custom',
  url: 'http:localhost:9000/components/tooltip',
  hideSelectors: [
    '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1)' // tooltip simple
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
  onReadyScript: null
}