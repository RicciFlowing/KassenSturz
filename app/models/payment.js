import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  date: DS.attr('string'),
  budget: DS.belongsTo('budget')
});
