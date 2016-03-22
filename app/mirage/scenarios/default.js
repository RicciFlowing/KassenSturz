export default function( server ) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('target', 10);
  let budget_1 = server.create('budget');
  let payments = server.createList('payment', 10, {budget_id: budget_1.id});
  server.db.budgets.update(budget_1.id,  {payments_ids: [payments[0].id]});

  // let budget_2 = server.create('budget');
  // server.createList('payment', 10, {budget_id: budget_2.id})
  // let budget_3 = server.create('budget');
  // server.createList('payment', 10, {budget_id: budget_3.id})
}
