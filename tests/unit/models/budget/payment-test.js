import { moduleForModel, test } from 'ember-qunit';

moduleForModel('budget/payment', 'Unit | Model | budget/payment', {
  // Specify the other units that are required for this test.
  needs: ['model:budget']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
