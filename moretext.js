'use strict'

var request = require('request');
var moretext_url = 'http://more.handlino.com/sentences.json';

function moretext(done) {
  request(moretext_url, function (error, response, body) {
    body = JSON.parse(body);
    done(null, body.sentences[0]);
  });
}

module.exports = moretext;
