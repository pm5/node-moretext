'use strict'

var expect = require('chai').expect;
var moretext = require('../moretext');

describe('Stream interface', function () {
  it('should create a readable stream of strings', function (done) {
    var m = moretext();
    m.on('readable', function () {
      var chunk = m.read();
      if (chunk === null) return;
      expect(chunk.length).to.be.above(0);
      expect(typeof chunk).to.eql('string');
    });
    m.on('end', function () {
      done();
    });
  });

  it('should read a multiple strings from the stream', function (done) {
    var times = 0, n = 10;
    var m = moretext({n:n});
    m.on('readable', function () {
      var chunk = m.read();
      if (chunk === null) return;
      times++;
    });
    m.on('end', function () {
      expect(times).to.eql(10);
      done();
    });
  });

  it('should read strings within certain length limits', function (done) {
    var limit = [90, 120];
    var m = moretext({limit:limit});
    m.on('readable', function () {
      var chunk = m.read();
      if (chunk === null) return;
      expect(chunk.length).to.be.above(limit[0]);
      expect(chunk.length).to.be.below(limit[1]);
    });
    m.on('end', function () {
      done();
    });
  });
});
