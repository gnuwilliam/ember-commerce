// for more details see: http://emberjs.com/guides/models/defining-models/

EmberCommerce.CnpjUser = DS.Model.extend({
  cnpj: DS.attr('string'),
  fantasy_name: DS.attr('string'),
  state_registration: DS.attr('string'),
  full_name: DS.attr('string'),
  phone: DS.attr('string'),
  e_mail: DS.attr('string'),
  address: DS.attr('string'),
  transporter: DS.attr('string'),
  password: DS.attr('string')
});
