import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  goal: DS.belongsTo('goal'),
  payments: DS.hasMany('payments', {async: false}),
  balance: Ember.computed('payments.@each.amount', function(){
    let payments = this.get('payments');
    let amounts = payments.mapBy('amount');
    let totalAmount = 0;
    amounts.forEach(function(amount){totalAmount+= parseInt(amount)});
    return totalAmount;
    }),
  remaining: Ember.computed('amount', 'balance', function(){
    return this.get('amount') - this.get('balance');
    }),
  percentage: Ember.computed('amount', 'balance', function(){
    if(Ember.isNone(this.get('amount'))){return 0;}
    return Math.floor(this.get('balance')/this.get('amount')*100);
    }),
});
