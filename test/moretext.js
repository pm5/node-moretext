'use strict'

var expect = require('chai').expect;
var moretext = require('../moretext');

describe('Moretext', function () {
  it('should provide dummy sentences using more.handlino.com', function (done) {
    moretext(function (error, text) {
      expect(text.length).to.be.above(0);
      done();
    });
  });

  it('could set number of sentences', function (done) {
    moretext({n: 10}, function (error, lines) {
      expect(lines.length).to.equal(10);
      expect(lines[0]).to.be.a('string');
      done();
    });
  });
});
