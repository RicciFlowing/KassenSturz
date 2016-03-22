export default function( server ) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('target', 10);
  server.createList('budget', 10);
}
