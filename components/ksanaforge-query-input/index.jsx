/** @jsx React.DOM */
var QueryInput = React.createClass({
  getDefaultProps:function() {
    return { onQueryChange:function(){} };
  },
  onChange:function(e) {
    if (this.timer) clearTimeout(this.timer);
    var newquery=this.refs.inputquery.getDOMNode().value;
    this.timer=setTimeout(
      (function(){
        this.props.onQueryChange(newquery);
      }).bind(this) 
    ,400); //if no input after 0.4 second, run the callback
  },
  render: function() {
    return ( // the input box
      <div>
        <input ref="inputquery" onChange={this.onChange} defaultValue={this.props.query||""}></input>
      </div>
    );
  }
});
module.exports=QueryInput;