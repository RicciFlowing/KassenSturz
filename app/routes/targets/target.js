import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('target', params.target_id);
  }
});
