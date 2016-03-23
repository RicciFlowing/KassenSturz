import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  balance: DS.attr('number'),
  goal: DS.belongsTo('goal'),
  payments: DS.hasMany('payments', {async: false})
});
