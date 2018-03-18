function menu() {
$("#about-page").click(function(e) {
    e.preventDefault();
    $("#main-content").load("/about.htm");
    history.pushState(null, null, "/about.htm");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}
    );
    $("#algebra-page").click(function(e) {
    e.preventDefault();
    $("#main-content").load("/algebra.htm");
    history.pushState(null, null, "algebra.htm");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
    );
$("#geometry-page").click(function(e) {
e.preventDefault();
    $("#main-content").load("/geometry.htm");
    history.pushState(null, null, "/geometry.htm");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
    );
}