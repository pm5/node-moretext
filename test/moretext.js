'use strict'

var expect = require('chai').expect;
var moretext = require('../moretext');

describe('Moretext', function () {
  it('should get dummy sentences using more.handlino.com', function (done) {
    moretext(function (error, text) {
      expect(text.length).to.be.above(0);
      done();
    });
  });

  it('could set number of sentences to get', function (done) {
    moretext({n: 10}, function (error, lines) {
      expect(lines.length).to.equal(10);
      expect(lines[0]).to.be.a('string');
      done();
    });
  });

  it('could limit word counts of sentences to get', function (done) {
    moretext({limit: 5}, function (error, text) {
      expect(text).to.be.a('string');
      expect(text.length).to.be.at.most(5);
      done();
    });
  });

  it('could limit word counts in a range', function (done) {
    moretext({limit: [5, 10]}, function (error, text) {
      expect(text).to.be.a('string');
      expect(text.length).to.be.at.most(10);
      expect(text.length).to.be.at.least(5);
      done();
    });
  });

  it('could limit word counts and set number of sentences to get', function (done) {
    moretext({n: 10, limit: [10, 20]}, function (error, lines) {
      expect(lines.length).to.equal(10);
      for (var i = 0; i < lines.length; i++) {
        expect(lines[i]).to.be.a('string');
        expect(lines[i].length).to.be.at.least(10);
        expect(lines[i].length).to.be.at.most(20);
      };
      done();
    });
  });
});
