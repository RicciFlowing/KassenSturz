import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  due: DS.attr('number'),
  amount: DS.attr('number'),
  balance: DS.attr('number'),
  rate: DS.attr('number'),
  percentage: Ember.computed('amount', 'balance', function(){return Math.floor(this.get('balance')/this.get('amount')*100);}),
});
