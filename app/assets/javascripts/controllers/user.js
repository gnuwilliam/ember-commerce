EmberCommerce.UserController = Ember.Controller.extend({
  reset: function() {
    this.setProperties({
      e_mail: "",
      password: ""
    });
  },

  token: localStorage.token,
  loggedIn: localStorage.loggedIn,
  userData: localStorage.userData,

  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),

  loggedInChanged: function() {
    localStorage.loggedIn = this.get('loggedIn');
  }.observes('loggedIn'),

  userDataChanged: function() {
    localStorage.userData = this.get('userData');
  }.observes('userData'),

  actions: {
    login: function() {
      var self = this;
      var user_data = this.getProperties('e_mail', 'password');

      Ember.$.post('/login', user_data).then(function (response) {
        if (response.error) {
          return alert(response.error);
        }

        self.set('token', response.token);
        self.set('loggedIn', true);
        self.set('userData', response.user);
      });
    },

    logout: function() {
      this.set('token', false);
      this.set('loggedIn', false);
      this.set('userData', false);
      this.transitionToRoute('main');
    }
  }
});