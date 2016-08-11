module.exports = function(casper, scenario, viewport) {
  casper.echo('clicking autosuggest dropdown menu')
  .then(function() {
    this.mouseEvent('click', '#content > div > div.rwd-content > div > div:nth-child(2) > section > article > div > div:nth-child(2) > div > a')
  });
};