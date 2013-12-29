// For more information see: http://emberjs.com/guides/routing/

EmberCommerce.CpfUserRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord('cpf_user');
  },

  actions: {
    create: function (cpf_user) {
      var route = this;

      cpf_user.save().then(function () {
        route.transitionTo('user');
      });
    }
  }
});
