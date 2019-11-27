function showName(name) {
    return 'your name is ' + name;
}
var myname = 'liuyyongsheng';
console.log(showName(myname));
var my = {
    name: 'liuyongsheng',
    age: 67
};
console.log(my);
// 参数默认值
function sum(x, y) {
    if (y === void 0) { y = 123; }
    return x + y;
}
sum(123);
