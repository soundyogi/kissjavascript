var marked = require('marked')
var request = require("request")

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});


request("http://46.101.246.57/tldr/0001_theponyfoochallenge.md", function(a,b,c){
    var node = document.createElement("section") 
    var article = node.appendChild(document.createElement("article"))
    article.classList.add("markdown-body");
    article.innerHTML = marked(c)
    document.body.appendChild(node)
    
    
})

