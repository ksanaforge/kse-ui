/** @jsx React.DOM */

var Result=React.createClass({ //for each result item
  render:function() {
    var outhtml=this.props.id+")"+this.props.text;
    return  <div className="resultitem" dangerouslySetInnerHTML={{__html: outhtml}} />
  }
}) 

var Resultlist = React.createClass({
  shouldComponentUpdate:function(nextProps, nextState) {
    //this is important , otherwise render will keep calling yase
    return nextProps.result!=this.props.result; 
  },  
  render: function() {
    console.log('result render')
    return (
      <div ref="resultlist">
      {
        //create Result for each result item
        this.props.result.map(function(R){
        return <Result id={R.id} text={R.text}></Result>})
      }
      </div>
    );
  }
});
module.exports=Resultlist;