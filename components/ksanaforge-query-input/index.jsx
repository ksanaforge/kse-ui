/** @jsx React.DOM */
var queryinput = React.createClass({
  getInitialState: function() {
    return {query: this.props.query};
  },
  onChange:function(e) {
    if (this.timer) clearTimeout(this.timer);
    var query=e.target.value;
    this.setState({query:query});
    this.timer=setTimeout(
      function(){
        mediator.publish("query.change",query)
      }
    ,300);
  },
  render: function() {
    return (
      <div>
      <input onChange={this.onChange} value={this.state.query}></input>
      </div>
    );
  }
});
module.exports=queryinput;