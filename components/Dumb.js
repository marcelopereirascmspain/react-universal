var React = require('react');

var div = React.createFactory('div');

module.exports = function Dumb(props) {
  return div(null, 'Hey! Whats up? ' + props.name);
}

