EmberCommerce.UserController = Ember.Controller.extend({
  actions: {
    login: function() {
      var user_data = this.getProperties('e_mail', 'password');

      Ember.$.post('/login', user_data).then(function (response) {
        if (response.error) {
          return alert(response.error);
        }
        console.log(response.token);
        console.log(response.user);
      });
    }
  }
});