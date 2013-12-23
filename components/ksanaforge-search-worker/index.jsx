/** @jsx React.DOM */

var searchworker = React.createClass({
  mixins:Require('react-mixins'),
  shouldComponentUpdate:function(nextProps, nextState) {
    return nextProps.db!=this.props.db || nextProps.query!=this.props.query; 
  },
  render: function() {
    this.$yase("search",{db:this.props.db,query:this.props.query,output:["match","texts"]})
        .done(function(data){
          mediator.publish("result.ready",data);
    })
    return (<div></div>);
  }
});
module.exports=searchworker;