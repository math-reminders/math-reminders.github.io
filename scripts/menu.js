function menu() {
    $("#geometry-page").click(function(e) {
e.preventDefault();
    $("#main-content").load("/geometry.htm");
    }
    );
}