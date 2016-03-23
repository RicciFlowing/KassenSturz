import Ember from 'ember';

export default Ember.Controller.extend({
  sum: Ember.computed('model.@each.amount', function(){
    let budgets = this.get('model');
    let amounts = budgets.mapBy('amount');
    let sum = 0;
    amounts.forEach(function(amount){sum+= parseInt(amount)});
    return sum;
  }),
  actions: {
    delete(budget){
      budget.destroyRecord();
    }
  }
});
