// for more details see: http://emberjs.com/guides/models/defining-models/

EmberCommerce.User = DS.Model.extend({
  e_mail: DS.attr('string'),
  password: DS.attr('string')
});
