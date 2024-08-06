const request = require('supertest');
 const app = require('../server');
 const chai = require('chai');
 const expect = chai.expect;

  // This test checks that when a GET request is made to the '/api/hello' route,
  // the server responds with a 200 status and a JSON object containing a 'message'
  // property with the value 'Hello, world!'.
  describe('GET /api/hello', () => {
    it('should return a 200 status and a message', (done) => {
      // We use the supertest library to make a request to our server.
      // We specify the route '/api/hello' that we want to test.
      request(app)
        .get('/api/hello')
        .end((err, res) => {
          // We use the 'expect' assertion from the chai library to check
          // that the status code of the response is indeed 200.
          expect(res.status).to.equal(200);
          // We use the 'to.have.property' assertion to check that the response
          // contains a 'message' property with the value 'Hello, world!'.
          expect(res.body).to.have.property('message', 'Hello, world!');
          // We call the 'done' function to indicate that the test is complete.
          done();
        });
    });
  });


// Testing the case when a route is unknown
describe('GET /api/unknown', () => {
  // This test checks that when a route that is not defined in our server
  // is requested, the server returns a 404 status code.
  it('should return a 404 status', (done) => {
    // We use the supertest library to make a request to our server.
    // We specify the route '/api/unknown' that we want to test.
    request(app)
      // We expect that the server will respond with a 404 status code.
      // We use the 'end' method to provide a callback function that will
      // be executed when the server responds.
      .get('/api/unknown')
      .end((err, res) => {
        // We use the 'expect' assertion from the chai library to check
        // that the status code of the response is indeed 404.
        expect(res.status).to.equal(404);
        // We call the 'done' function to indicate that the test is complete.
        done();
      });
  });
});
