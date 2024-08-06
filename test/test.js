const request = require('supertest');
 const app = require('../server');
 const chai = require('chai');
 const expect = chai.expect;

 describe('GET /api/hello', () => {
   it('should return a 200 status and a message', (done) => {
     request(app)
       .get('/api/hello')
       .end((err, res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.have.property('message', 'Hello, world!');
         done();
       });
   });
 });

 describe('GET /api/unknown', () => {
    it('should return a 404 status', (done) => {
      request(app)
        .get('/api/unknown')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });