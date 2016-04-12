import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['isPositive:green:red'],
  isPositive: Ember.computed.gt('balance', 0),
}).reopenClass({
  positionalParams: ['balance']
});
