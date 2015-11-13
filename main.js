var marked = require('marked')
var request = require("request")


marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});


request("http://kissjavascript.com/kiss/0001_theponyfoochallenge.md", function(a,b,c){
    var node = document.createElement("section") 
    var article = node.appendChild(document.createElement("article"))
    article.classList.add("markdown-body");
    article.innerHTML = marked(c)
    document.body.appendChild(node)
})




window.onload = function(){
    var h1 = document.getElementsByTagName("h1")
    debugger
    var words = document.getElementsByClassName('word')
    var tl = new TimelineMax();
    tl.staggerTo(words, 1, {top:0, ease:Quart.easeOut}, 0.5);
    
    var box = document.getElementsByClassName("box")
    var tl2 = new TimelineMax();
    tl2.staggerTo(box, 10, {bottom:0, ease:Quart.easeOut}, 5);
}

