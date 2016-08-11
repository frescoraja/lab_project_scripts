module.exports = function(casper, scenario, viewport) {
  casper.echo('hover over simple text')
  .then(function() {
    this.mouse.move('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > span:nth-child(1) > span');
  })
  .then(function() {
    this.waitFor(function check() {
      return this.evaluate(function() {
        return !!document.querySelector('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > span:nth-child(1) > span > div:nth-child(2)');
      });
    }, function then() {
      this.echo('tooltip revealed');
    }, function timeout() {
      this.echo('tooltip never revealed', 'ERROR');
    })
  })
}