import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPayment(){
      let payment = this.get('payment');
      payment.set('budget', this.get('budget'));
      payment.save();
      this.set('payment', this.store.createRecord('payment'));
      return false;
    }
  }
});
