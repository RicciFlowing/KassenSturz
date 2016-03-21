import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  due: DS.attr('number'),
  amount: DS.attr('number')
});
