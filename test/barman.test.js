'use strict';

var app = require('../app'),
  request = require('supertest'),
  expect = require('chai').expect;

describe('Barman API endpoint Integration Tests', function () {
  describe('#GET / single', function () {
    it('should get OK response and a single drink', function (done) {
      request(app)
        .get('/single')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.exist;
          expect(res.body.name).to.equal('Moonshine');
          done();
        });
    });
  });
  describe('#GET / double', function () {
    it('should get OK response and a double drink', function (done) {
      request(app)
        .get('/double')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.exist;
          expect(res.body.name).to.equal('Bourbon');
          done();
        });
    });
  });
  describe('#GET / bottle', function () {
    it('should get OK response and a bottle of drink', function (done) {
      request(app)
        .get('/bottle')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.exist;
          expect(res.body.name).to.equal('Firewater Whiskey');
          done();
        });
    });
  });
});
