module.exports = function(casper, scenario, viewport) {
  casper.echo('dragging and dropping item from source button to target area')
  .then(function() {
    this.echo('mouse down on drag item 1');
    this.mouse.down('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > div:nth-child(1) > div:nth-child(1) > div')

    this.echo('mouse move to target div');
    this.mouse.move('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > div:nth-child(2) > div');

    this.echo('mouse up from target div');
    this.mouse.up('#content > div > div.rwd-content > div > div:nth-child(2) > section:nth-child(1) > article > div > div:nth-child(2) > div');
  })
};