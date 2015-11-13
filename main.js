var marked = require('marked')
var request = require("request")

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});


request("/kiss/0001_theponyfoochallenge.md", function(a,b,c){
    var node = document.createElement("section") 
    var article = node.appendChild(document.createElement("article"))
    article.classList.add("markdown-body");
    article.innerHTML = marked(c)
    document.body.appendChild(node)
    
    
})

