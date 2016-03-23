export default function( server ) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('goal', 10);
  let budget_1 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_1.id});
  let budget_2 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_2.id});
  let budget_3 = server.create('budget');
  server.createList('payment', 10, {budgetId: budget_3.id});
}
