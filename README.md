
node-moretext
=============

Get dummy Chinese text (lorem ipsum) with [Handlino][] serivce.

[Handlino]: http://more.handlino.com/

Usage
-----

Command-line tool:
```
$ moretext
$ moretext -n 10 --limit 30
```

Use as a library:

```
var moretext = require('moretext');

moretext(function (err, text) {
  if (err) { throw err; }
  // do something with the text...
});

moretext({n:10, limit:30}, function (err, lines) {
  // lines is an array of 10 strings, each no more than 30 characaters
});
```

See <http://more.handlino.com/api> for the Handlino API.
