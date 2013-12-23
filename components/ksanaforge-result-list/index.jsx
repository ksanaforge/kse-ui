/** @jsx React.DOM */

var Result=React.createClass({
  render:function() {
    return  <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: this.props.children.toString()
          }}
        ></div>
  }
}) 

var Resultlist = React.createClass({
  render: function() {
    var out=[];
    if (!this.props.result) return;
    for (var i in this.props.result.texts) {
      out.push(this.props.result.texts[i]);
    }
    return (
      <div>{
        out.map(function(i,idx){
        return <Result>{idx+1}.{i}</Result>})
      }
      </div>
    );
  }
});
module.exports=Resultlist;