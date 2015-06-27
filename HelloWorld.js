/**
 * Created by tianxing on 2015/5/10.
 */

var http= require('http');

var server= http.createServer(function(request,response){
response.end('NodeJs');
});

server.listen(8011);
