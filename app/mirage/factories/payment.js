/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function(i) {                  // and functions
    return 'Payment ' + i;
   },
  amount: function(i){ return Math.floor((Math.random() * 10) + 1)*10; },
  date: faker.date.past,
  budget_id: 0,
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});
