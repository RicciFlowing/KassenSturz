import Ember from 'ember';

export default Ember.Controller.extend({
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
