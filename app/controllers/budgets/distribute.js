import Ember from 'ember';

export default Ember.Controller.extend({
  sum: Ember.computed('budgets.@each.amount', function(){
    let budgets = this.get('budgets');
    let amounts = budgets.mapBy('amount');
    let totalAmount = 0;
    amounts.forEach(function(amount){totalAmount+= parseInt(amount)});
    return totalAmount;
    }),
  remaining: Ember.computed('sum', 'income', function(){
    return this.get('income')-this.get('sum');
    }),
});
