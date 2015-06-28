/**
 * Created by tianxing on 2015/6/28.
 */

var EventEmitter = require("events").EventEmitter;
var util = require("util");

function Person(){
}

util.inherits(Person,EventEmitter);

var p1= new Person();

p1.addListener('闹钟', function (dtTime) {
    console.log(dtTime+'点了，该起床了！');
});
p1.emit('闹钟','8:00');

p1.on('洗刷', function () {
    console.log('起床后洗洗刷刷！');
});
p1.emit('洗刷');

p1.on('坐车', function (type,traffic ) {
        console.log('做'+traffic+'去'+type+'！');
})
p1.emit('坐车','上班','地铁');

p1.once('午餐', function () {
    console.log('12：00钟，去吃午饭了！');
});
p1.emit('午餐');

var meeting = function (msg) {
    console.log('参加'+msg+'会议！');
}
p1.on('开会', meeting)
p1.emit('开会','需求沟通');
p1.removeListener('开会',meeting);
p1.on('开会', meeting);
p1.emit('开会','部门例会');

p1.emit('坐车','下班','公交');
p1.emit('坐车','北京西站','地铁');

p1.removeAllListeners('坐车');

//已经被移除，，没有结果输出了
p1.emit('坐车','下班','公交');