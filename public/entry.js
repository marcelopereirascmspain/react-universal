var React = require('react');
var ReactDOM = require('react-dom');
var Smart = require('../components/Smart');

ReactDOM.render(
  React.createFactory(Smart)(),
  document.getElementById('app'));