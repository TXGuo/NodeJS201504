/**
 * Created by tianxing on 2015/5/10.
 */
//
//var http= require('http');
//
//var server= http.createServer(function(request,response){
//response.end('NodeJs');
//});
//
//server.listen(8011);

//process.stdout.write('45');
//
//process.stderr.write('5465786');
//
//process.stdin.setEncoding('utf-8');
//
//process.stdin.on('data',function(data){
//    console.log(data);
//});
//
//process.stdin.setEncoding();

//var arr=[12,3,2,8,7,15];
//
//function compare(a,b){
//    return a-b;
//}
//console.log(arr.reverse());
//
//
//console.log(arr.sort(compare));
//console.log(arr.slice(1,3));

//bind 永久绑定，一旦绑定不再变化，不可以解绑    call  临时绑定

function Person(){
    this.name='';
    this.say=function(){
        console.log('hello');
    }
}

var ary=[1,23,4,66];

console.log(ary.slice(1,3));
console.log(ary);
//function Event(){}


var buffer=new Buffer(12);
buffer.write("珠峰",0,6);
buffer.write("培训",6,6);
console.log(buffer.toString('utf-8'));

var buffer = new Buffer([0xe9,0x83,0xad,0xe5,0xa4,0xa9,0xe6,0x98,0x9f]);
console.log(buffer);
//
//var string_decoder = require('string_decoder');
//var dr = new StringDecoder();
//decoder.write(buffer);
//console.log();

var buffer1 = new Buffer([4,5,6]);
var buffer2 = new Buffer(5);

buffer2[0]=1;
buffer2[0]=2;
buffer2[0]=3;
console.log(buffer2.copy(buffer1,3,0,3));
