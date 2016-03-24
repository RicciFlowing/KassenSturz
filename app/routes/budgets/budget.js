import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('budget', params.budget_id);
  },

  setupController(controller, model){
    Ember.set(controller, 'budget', model);
    Ember.set(controller, 'payment', this.store.createRecord('payment'));
  },


});
