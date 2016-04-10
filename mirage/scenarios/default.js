export default function( server ) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.
  let budget_1 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_1.id});
  let budget_2 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_2.id});
  let budget_3 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_3.id});
  let budget_4 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_4.id});

  let goal_1 = server.create('goal', {budgetId: budget_1.id});
  let goal_2 = server.create('goal', {budgetId: budget_2.id});
  let goal_3 = server.create('goal', {budgetId: budget_3.id});
}
