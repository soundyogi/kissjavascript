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
    var text = document.getElementsById("the-ponyfoo-challenge").innerHTML
    document.getElementsById("the-ponyfoo-challenge").innerHTML = "<p>rr</p>"
    debugger
    var words = document.getElementsByClassName('word')
    var tl = new TimelineMax();
    tl.staggerTo(words, 1, {top:0, ease:Quart.easeOut}, 0.5);


