React=require("react");
Require=function(arg){return require("../"+arg)};
var main=require("main")
React.renderComponent(main(),document.getElementById("main"));