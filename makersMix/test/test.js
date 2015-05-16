process.env.NODE = "test";

var request = require('supertest'),
    express = require('express');

var test_port = 9292;
Browser.localhost('example.com', test_port);


var app = require('../app.js');

before(function(done) {
  this.server = server.listen(test_port);
  browser = Browser.create();
});


describe('POST', function() {
  it('respondes with a json success message', function(done) {
    request(app)
    .post('/makers')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'name': 'armi', 'pair': 'false', 'blacklist': 'false', 'numberOfCommits': '200' })
    . expect(200, done);
  });
});

describe('GET', function(){
  it('responds with a list of makers in JSON', function(done){
    request(app)
    .get('/makers')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET', function() {
  it('responds with a single maker in JSON', function(done) {
    request(app)
    .get('/makers/armi')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});
