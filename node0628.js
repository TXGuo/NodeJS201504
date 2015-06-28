/**
 * Created by tianxing on 2015/6/28.
 */
//
//console.log(process.pid);
//
//process.stdin.on("data", function (result) {
//    process.stdout.write(result);
//});
//
//process.argv.forEach(function (obj) {
//    console.log(obj);
//});
//
//setTimeout(function () {
//    console.log(process.pid);
//    process.kill(process.pid);
//},5000);
//
//process.on("SIGTERM", function () {
//    console.log("No");
//});

console.log(process.memoryUsage())

