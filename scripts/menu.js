function menu() {
$("#about-page").click(function(e) {
    e.preventDefault();
    $("#main-content").load("/about.htm");
}
    );
    $("#algebra-page").click(function(e) {
    e.preventDefault();
    $("#main-content").load("/algebra.htm");
    }
    );
$("#geometry-page").click(function(e) {
e.preventDefault();
    $("#main-content").load("/geometry.htm");
    }
    );
}