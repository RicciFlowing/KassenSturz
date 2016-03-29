import Ember from 'ember';

const TOTAL = 1000;

export default Ember.Service.extend({
  total(){
    return TOTAL;
  }
});
