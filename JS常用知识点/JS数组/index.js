// 1. 清空数组的方式
var a = [1, 3, 5];
// 方案1
a = [];

a.length = 0;

var b = [1, 3, 5];
Array.prototype.myMap = function () {
    console.log(arguments);
};
b.myMap(function(){
    console.log('1');
}, '31');



