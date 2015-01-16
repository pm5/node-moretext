'use strict'

var expect = require('chai').expect;
var moretext = require('moretext');
var concat = require('concat-stream');

describe('Stream interface', function () {
  it('should create a readable stream', function (done) {
    moretext().pipe(concat(function (body) {
      expect(body.length).to.be.above(0);
      done();
    }));
  });

  it('should read a single string from the stream', function (done) {
    moretext().pipe(concat(function (body) {
      body = body.toString('utf-8');
      expect(typeof body).to.eql('string');
      done();
    }));
  });
});
