EmberCommerce.CpfUserController = Ember.Controller.extend({
  actions: {
    create: function (cpf_user) {
      var route = this;
      var cpf_user_data = this.getProperties('cpf', 'full_name', 'phone', 'e_mail', 'address', 'password');

      if (cpf_user_data) {
        cpf_user.save().then(function () {
          route.transitionToRoute('user');
        });
      } else {
        alert('Please fill the fields');
      }
    }
  }
});