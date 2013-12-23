/** @jsx React.DOM */
var mixins=Require('react-mixins');
var main = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  render: function() {
    return (
      <div>
        Hello,{this.state.bar}
      </div>
    );
  }
});
module.exports=main;