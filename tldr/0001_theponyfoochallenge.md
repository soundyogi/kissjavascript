# the ponyfoo challenge
> wait what? - 7.Nov2015 10:40AM

### Rules:

    1. read ponyfoos entire blog* (protip: will take some time)
    2. write a micro blogging platform*
    3. display your first post as soon as humanly possible*
    
<sup> *~~stolen~~ _inspired_ by [ponyfoo's first post](https://ponyfoo.com/articles/pony-foo-begins) </sup>

### personal current acceptance criteria:

    a micro blogging "engine":
    should have tests,
    should render markdown files,
    should pretty
    
#### tests
- [] nope :O

#### render markdown
- [x] a markdown file rendered clientside, served by http-server

```javascript
var marked = require('marked')
var request = require("request")


request("http://46.101.246.57/tldr/0001_theponyfoochallenge.md", function(a,b,c){
    var node = document.createElement("section") 
    var article = node.appendChild(document.createElement("article"))
    article.classList.add("markdown-body");
    article.innerHTML = marked(c)
    document.body.appendChild(node)
})
```
<sub>this is _all_ of the js bundled with browserify</sub>

#### pretty
- [x] github-flavoured-css

---

### why?
I wanted to publish some articles / stuff forever but never hat the guts.
I am not a good writer. I am doing this to improve and document the process.

    
>This page was online about 2 hours after I read pony foo begins