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
});
