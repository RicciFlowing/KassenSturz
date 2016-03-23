import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  due: DS.attr('number'),
  amount: DS.attr('number'),
  //Geht in Budget rate: DS.attr('number'),
  percentage: Ember.computed('amount', 'balance', function(){return Math.floor(this.get('balance')/this.get('amount')*100);}),
  budget: DS.belongsTo('budget'),
  rate: Ember.computed.alias('budget.amount'),
  payments: Ember.computed.alias('budget.payments'),
  // balance: Ember.computed('payments.@each', function(){
  //   let amounts = this.get('payments').mapBy('amount');
  //   let sum = 0;
  //   amounts.forEach(function(amount){sum+= parseInt(amount)});
  //   return sum;}),

});
