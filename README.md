
node-moretext
=============

Get dummy Chinese text (lorem ipsum) with [Handlino][] serivce.

[Handlino]: http://more.handlino.com/

Usage
-----

Command-line tool:
```
$ moretext
$ moretext -n 11 --limit 29
```

Use as a library:

```
var moretext = require('moretext');

moretext(function (err, text) {
  if (err) { throw err; }
  // do something with the text...
});

moretext({n:13, limit:[23, 29]}, function (err, lines) {
  // lines is an array of 13 strings, each between 23 and 29 characaters
});
```

Stream interface:

```
moretext({n:43, limit: 7}).pipe(process.stdout);
```

See <http://more.handlino.com/api> for the Handlino API.

License
-------

[MIT License](http://pm5.mit-license.org/)
