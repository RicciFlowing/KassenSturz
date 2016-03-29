import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    Ember.set(controller, 'budgets', this.modelFor('budgets'));
  }
});
