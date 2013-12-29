// for more details see: http://emberjs.com/guides/models/defining-models/

EmberCommerce.CpfUser = DS.Model.extend({
  cpf: DS.attr('string'),
  full_name: DS.attr('string'),
  phone: DS.attr('string'),
  e_mail: DS.attr('string'),
  address: DS.attr('string'),
  password: DS.attr('string')
});
