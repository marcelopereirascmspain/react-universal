var React = require('react');
var Dumb = require('./Dumb');

module.exports = React.createClass({
  getInitialState: function () {
    return { name: '' };
  },

  componentDidMount: function () {
    setTimeout(function () {
      console.log('timeout!')
      this.setState({ name: 'antonio' });
    }.bind(this), 1000);
  },

  render: function () {
    return Dumb({ name: this.state.name });
  }
});