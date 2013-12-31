// For more information see: http://emberjs.com/guides/routing/

EmberCommerce.UserRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    controller.reset();
  }
});
