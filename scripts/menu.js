var mathjax = require("mathjax");
var $ = require("jquery");
var Menu = function() {
$("#about-page").click(function(e) {
    e.preventDefault();
    $("#main-content").load("/about.htm");
    history.pushState(null, null, "/about.htm");
}
    );
    $("#algebra-page").click(function(e) {
    e.preventDefault();
    $("#main-content").load("/algebra.htm");
    history.pushState(null, null, "algebra.htm");
    }
    );
$("#geometry-page").click(function(e) {
e.preventDefault();
    $("#main-content").load("/geometry.htm");
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    history.pushState(null, null, "/geometry.htm");
    }
    );
}
module.exports = Menu;