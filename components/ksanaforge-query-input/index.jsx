/** @jsx React.DOM */
var QueryInput = React.createClass({
  getInitialState: function() {
    return {query: this.props.query};
  },
  onChange:function(e) {
    if (this.timer) clearTimeout(this.timer);
    var newquery=e.target.value;
    this.setState({query:newquery});
    this.timer=setTimeout(
      function(){
        mediator.publish("query.change",newquery)
      }
    ,400); //if no input after 0.4 second, publish "query.change"
  },
  render: function() {
    return ( // the input box
      <div>
        <input onChange={this.onChange} value={this.state.query}></input>
      </div>
    );
  }
});
module.exports=QueryInput;