var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  folder: testName,
  label: 'UI-demo components - calendar',
  url: 'http:localhost:9000/components/calendar',
  hideSelectors: [],
  removeSelectors: [
    'div[data-reactid=".0.0"]',
    'div[data-reactid=".0.2"]',
    'div[data-reactid=".0.1.0.0"]', // component list sidebar
    '.demo-doc' // 'view code' button
  ],
  selectors: [
  'section:nth-child(1) > article > div', // datetime picker
  'section:nth-child(2) > article > div', // calendar range
  'section:nth-child(3) > article > div'  // slider
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: null
}