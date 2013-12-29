// for more details see: http://emberjs.com/guides/models/defining-models/

EmberCommerce.CnpjUser = DS.Model.extend({
  cnpj: DS.attr('string'),
  fantasyName: DS.attr('string'),
  stateRegistration: DS.attr('number'),
  fullName: DS.attr('string'),
  phone: DS.attr('number'),
  eMail: DS.attr('string'),
  address: DS.attr('string'),
  transporter: DS.attr('string'),
  password: DS.attr('string')
});
