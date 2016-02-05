var express = require('express');
var fs = require('fs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Smart = require('./components/Smart');
var index = require('./index.js');
var app = express();

app.use(express.static('public'));

function isomorphic(req, res, next) {
  var str = ReactDOMServer.renderToString(React.createFactory(Smart)());
  var template = index(str);

  res.send(template);
}

app.get('/', isomorphic);

app.listen(3000, function () {
  console.log('listening...');
});
