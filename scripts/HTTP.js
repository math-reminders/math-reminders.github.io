// void GET(string url, function success, function fail)
var GET = function(url, success, fail) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true); // assync requests only
    request.onreadystatechange = function() {
    if (request.readyState == 4) {
    if (request.status == 200) success(request.responseText);
    else fail(request.status);
    }
    request.send(NULL);
    }
    module.exports = GET;
    
