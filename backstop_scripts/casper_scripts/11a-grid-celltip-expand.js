module.exports = function(casper, scenario, viewport) {
  casper.echo('render grid cell tip')
  .then(function() {
    this.mouseEvent('click', 'span[data-reactid=".0.1.0.1.$grid-celltip/=1$grid-celltip.$/=11.$=1$grid-celltip-component.0.$grid-celltip.$/=16.$/=12.$=11.0.0.0.1:$grid-header-chinese-1.0.$=11"]');
  })
  .then(function() {
    this.echo('expanded grid')
  })
}