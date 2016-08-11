module.exports = function(casper, scenario, viewport) {
  casper.click('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(2) > article > div > select:nth-child(3)');
  })
  .then(function() {
    this.echo('clicked select form dropdown')
  })
};