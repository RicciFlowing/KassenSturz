import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    Ember.Logger.log(this.store.findAll('target'));
    return this.store.findAll('target');
  }
});
