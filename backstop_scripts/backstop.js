var test_scenarios = require('./scenarios');

module.exports = {
  viewports: [
    {
      name: 'desktop',
      width: 1024,
      height: 768
    }
  ],
  scenarios: test_scenarios,
  paths: {
    //paths relative to BackstopJS folder: node_modules/css-testing!
    bitmaps_reference: '../../backstop_data/baseline',
    bitmaps_test: '../../backstop_data/compared',
    compare_data: '../../backstop_data/compared/compare.json',
    casper_scripts: '../../backstop_scripts/casper_scripts',
    ci_report: '../../backstop_data/jenkins_report'
  },
  engine: 'slimerjs',
  report: ['browser', 'CI', 'CLI'],
  ci: {
    format: 'junit',
    reportFileName: 'ui-demo-css-test',
    testSuiteName: 'ui-demo-css-test'
  },
  casperFlags: [],
  debug: false,
  port: 3333
}