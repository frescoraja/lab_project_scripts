module.exports = function(casper, scenario, viewport) {
  casper.echo('clicking autosuggest dropdown')
  .then(function () {
    this.mouseEvent('click', '#content > div > div.rwd-content > div > div:nth-child(2) > section > article > div > div:nth-child(2) > div > a');
  })
  .then(function() {
    this.echo('enter text into autosuggest input')
  })
  .then(function() {
    this.sendKeys('#content > div > div.rwd-content > div > div:nth-child(2) > section > article > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input[type="text"]', 'test input');
  });
};