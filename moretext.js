'use strict'

var request = require('request');
var moretext_url = 'http://more.handlino.com/sentences.json';

function moretext(arg1, arg2) {
  var url = moretext_url;
  var done = arg2;
  if (typeof arg1 === 'function') {
    done = arg1;
  } else if (typeof arg2 === 'function') {
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
    done = arg2;
  } else if (arg2 === undefined) {
    return request(url);
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
