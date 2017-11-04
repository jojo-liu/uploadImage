var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        // console.log("Request received.");
        // var postData = "";

        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + "received");

        // request.setEncoding('utf8');

        // request.addListener("data", function(postDataChunk) {
        // 	//called when a new chunk of data was received
        // 	postData += postDataChunk;
        // 	console.log("Reveived POST data chunk'" + postDataChunk + "'.");
        // });

        // request.addListener("end", function() {
        // 	//called when all data chunks have been received, called only once
        // 	route(handle, pathname, response, postData);
        // })

        route(handle, pathname, response, request);


        // route(handle, pathname, response);

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write("Hello World");
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
