var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  folder: testName,
  label: 'UI-demo components - drag and drop - apply event',
  url: 'http:localhost:9000/components/drag-and-drop',
  hideSelectors: [],
  removeSelectors: [
    'div[data-reactid=".0.0"]',
    'div[data-reactid=".0.2"]',
    'div[data-reactid=".0.1.0.0"]', // component list sidebar
    '.demo-doc' // 'view code' button
  ],
  selectors: [
   '#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div' // drag and drop source and target area
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: '08a-draganddrop-dragitem'
}