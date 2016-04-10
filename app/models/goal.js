import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  due: DS.attr('number'),
  amount: DS.attr('number'),
  //Geht in Budget rate: DS.attr('number'),
  percentage: Ember.computed('amount', 'balance', function(){
    if(Ember.isNone(this.get('amount'))){return 0;}
    return Math.floor(this.get('balance')/this.get('amount')*100);
  }),
  budget: DS.belongsTo('budget'),
  rate: Ember.computed.alias('budget.amount'),
  payments: Ember.computed.alias('budget.payments'),
  balance: Ember.computed('payments.@each.amount', function(){
    if(Ember.isNone(this.get('payments'))){
      Ember.Logger.log('hello');
      return 0;
    }
    let payments =this.get('payments');
    let sum = 0;
    if(payments.length >0){
      let amounts = payments.mapBy('amount');
      amounts.forEach(function(amount){sum+= parseInt(amount);});
    }

    return sum;}),

});
