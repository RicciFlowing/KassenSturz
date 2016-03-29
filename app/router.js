import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('goals', function() {
    this.route('goal', {
      path: ':goal_id'
    });
    this.route('new');
  });
  this.route('budgets', function() {
    this.route('new');
    this.route('budget', {
      path: ':budget_id'
    }, function() {
      this.route('payments');
    });
    this.route('distribute');
  });
});

export default Router;
