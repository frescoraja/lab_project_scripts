module.exports = function(casper, scenario, viewport) {
  casper.echo('reset cursor position')
  .then(function() {
    this.mouse.move('body')
  })
  .then(function() {
    this.echo('hover over simple html')
  })
  .then(function() {
    this.mouse.move('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > span:nth-child(2) > span');
  })
  .then(function() {
    this.waitFor(function check() {
      return this.evaluate(function() {
        return !!document.querySelector('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > span:nth-child(2) > span > div:nth-child(2)');
      });
    }, function then() {
      this.echo('tooltip revealed');
    }, function timeout() {
      this.echo('tooltip never revealed', 'ERROR');
    })
  })
}