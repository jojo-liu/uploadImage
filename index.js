var server = require("./requestHandlers");
var router = require("./router");
var requesthandlers = require("./requesthandlers");

var handle = {} //handler is an Object rather than an Array
handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;
handle["/show"] = requesthandlers.show;

server.start(router.route, handle);