module.exports = function(casper, scenario, viewport) {
  casper.echo('render grid cell tip')
  .then(function() {
    this.mouse.move('#content > div > div.rwd-content > div > div:nth-child(2) > section > article > div > div:nth-child(1) > div > div > div:nth-child(2) > div.js-scroll-container > table > tbody > tr:nth-child(1) > td:nth-child(2)');
  })
  .then(function() {
    this.echo('reveal tooltip')
  })
}