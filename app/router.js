import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('targets', function() {
    this.route('target', {
      path: ':target_id'
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
  });
});

export default Router;
