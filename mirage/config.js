export default function() {
  this.get('/goals');
  this.get('/goals/:id');
  this.put('/goals/:id');
  this.post('/goals');


  this.get('/payments');
  this.post('/payments');

  this.get('/budgets');
  this.get('/budgets/:id');
  this.post('/budgets');
  this.del('/budgets/:id');
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
