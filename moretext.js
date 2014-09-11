'use strict'

var request = require('request');
var moretext_url = 'http://more.handlino.com/sentences.json';

function moretext(arg1, arg2) {
  var url, done;
  if (arg2 === undefined) {
    url = moretext_url;
    done = arg1;
  } else {
    url = moretext_url + '?n=' + arg1.n;
    done = arg2;
  }
  request(url, function (error, response, body) {
    body = JSON.parse(body);
    if (arg2 === undefined) {
      done(null, body.sentences[0]);
    } else {
      done(null, body.sentences);
    }
  });
}

module.exports = moretext;
