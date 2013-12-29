// for more details see: http://emberjs.com/guides/models/defining-models/

EmberCommerce.CpfUser = DS.Model.extend({
  cpf: DS.attr('number'),
  fullName: DS.attr('string'),
  phone: DS.attr('number'),
  eMail: DS.attr('string'),
  address: DS.attr('string'),
  password: DS.attr('string')
});
