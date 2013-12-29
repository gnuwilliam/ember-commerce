// For more information see: http://emberjs.com/guides/routing/

EmberCommerce.CnpjUserRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord('cnpj_user');
  },

  actions: {
    create: function (cnpj_user) {
      var route = this;

      cnpj_user.save().then(function () {
        route.transitionTo('user');
      });
    }
  }
});
