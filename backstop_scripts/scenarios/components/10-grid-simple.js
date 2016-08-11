var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  folder: testName,
  label: 'UI-demo components - grid simple',
  url: 'http:localhost:9000/components/grid/grid-simple',
  hideSelectors: [],
  removeSelectors: [
    'div[data-reactid=".0.0"]',
    'div[data-reactid=".0.2"]',
    'div[data-reactid=".0.1.0.0"]', // component list sidebar
    '.demo-doc' // 'view code' button
  ],
  selectors: [
  'div[data-reactid=".0.1.0.1.$grid-simple/=1$grid-simple.$/=11.$=1$grid-simple-component"]' // simple grid component
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: null
}