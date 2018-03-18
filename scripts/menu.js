function menu() {
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
history.pushState(null, null, "/geometry.htm");
    }
    );
}