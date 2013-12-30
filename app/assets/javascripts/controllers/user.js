EmberCommerce.UserController = Ember.Controller.extend({
  actions: {
    login: function() {
      var user_data = this.getProperties('e_mail', 'password');

      Ember.$.get('/login', user_data).then(function(response) {
        if (response.error) {
          return alert(response.error);
        }
        response = response[Object.keys(response)[0]];
        console.log(response);
      });
    }
  }
});
