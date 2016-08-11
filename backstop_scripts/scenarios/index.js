var fs             = require('fs'),
    scenarios_path = __dirname + '/components/',
    test_scenarios = [],
    scenario;

fs.readdirSync(scenarios_path).forEach(function(filename) {
  if(! /^\..*/.test(filename)) {
    scenario = require(scenarios_path + filename);
    test_scenarios.push(scenario);
  }
});

module.exports = test_scenarios;