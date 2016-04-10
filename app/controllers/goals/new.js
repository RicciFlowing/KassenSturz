import Ember from 'ember';

export default Ember.Controller.extend({
  due: Ember.computed('goal.amount', 'budget.amount', function(){
    Ember.Logger.log(this.get('goal').get('amount'));
    let month = Math.round(parseInt(this.get('goal').get('amount'))/parseInt(this.get('budget').get('amount')));
    return month;
  }),
  actions: {
    save(){
      let goal = this.get('goal');
      goal.save().then(()=>{
        this.createBudget(goal);
        this.transitionToRoute('goals');
      });
    }
  },
  createBudget(goal){
    let budget = this.get('budget');
    budget.set('name', 'Budget für ' + goal.get('name'));
    budget.set('goal', goal);
    budget.save();
  }
});
