var path = require('path'),
    testName = path.basename(__filename).split('.')[0];

module.exports = {
  folder: testName,
  label: 'UI-demo components - forms',
  url: 'http:localhost:9000/components/form',
  hideSelectors: [],
  removeSelectors: [
    'div[data-reactid=".0.0"]',
    'div[data-reactid=".0.2"]',
    'div[data-reactid=".0.1.0.0"]', // component list sidebar
    '.demo-doc' // 'view code' button
  ],
  selectors: [
  'section:nth-child(1) article > div', // Text input
  'section:nth-child(2) article > div', // Select input
  'section:nth-child(3) article > div', // buttons
  'section:nth-child(4) article > div', // radio
  'section:nth-child(5) article > div', // radio group
  'section:nth-child(6) article > div' // radio check/uncheck
  ],
  readyEvent: null,
  delay: 250,
  misMatchThreshold: 0.05,
  onBeforeScript: null,
  onReadyScript: null
}