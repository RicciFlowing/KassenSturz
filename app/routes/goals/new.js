import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      goal: this.store.createRecord('goal'),
      budget: this.store.createRecord('budget'),
    });
  },
  setupController(controller, model){
    Ember.set(controller, 'goal', model.goal);
    Ember.set(controller, 'budget', model.budget);
  }
});
