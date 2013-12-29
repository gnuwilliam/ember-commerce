// For more information see: http://emberjs.com/guides/routing/

EmberCommerce.Router.map(function() {
  this.resource('main', { path: '/' });

  this.resource('user', function () {
    this.resource('cpf_user');
    this.resource('cnpj_user');
  });
});
