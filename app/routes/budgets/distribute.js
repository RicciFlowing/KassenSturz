import Ember from 'ember';

export default Ember.Route.extend({
  incomeService: Ember.inject.service('income'),
  setupController(controller, model){
    Ember.set(controller, 'budgets', this.modelFor('budgets'));
    Ember.set(controller, 'income', this.get('incomeService').total());
  }
});
