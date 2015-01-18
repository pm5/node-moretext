'use strict'

var request = require('request');
var util = require('util');
var stream = require('stream');
var moretext_url = 'http://more.handlino.com/sentences.json';

util.inherits(SentenceStream, stream.Transform);

function SentenceStream() {
  stream.Transform.call(this, { objectMode: true });
  this._data = '';
}

SentenceStream.prototype._transform = function (data, encoding, done) {
  this._data += data;
  done();
};

SentenceStream.prototype._flush = function (done) {
  var that = this;
  JSON.parse(this._data).sentences.forEach(function (d) {
    that.push(d);
  });
  done();
};

function moretext(arg1, arg2) {
  var url = moretext_url;
  var done = arg2;

  if (typeof arg1 === 'function') {
    done = arg1;
  } else if (typeof arg1 === 'object') {
    var param = [];
    if (arg1.n) param.push('n=' + arg1.n);
    if (arg1.limit) {
      if (typeof arg1.limit === 'number') {
        param.push('limit=' + arg1.limit);
      } else {
        param.push('limit=' + arg1.limit[0] + ',' + arg1.limit[1]);
      }
    }
    url += '?' + param.join('&');
  }

  if (done === undefined) {
    return request(url).pipe(new SentenceStream());
  }
  request(url, function (error, response, body) {
    body = JSON.parse(body);
    if (typeof arg1 === 'function' || ! arg1.n) {
      done(null, body.sentences[0]);
    } else {
      done(null, body.sentences);
    }
  });
}

module.exports = moretext;
