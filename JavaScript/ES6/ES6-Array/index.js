 // 高阶函数
 /*
    1. map,
    @params: Fun(item, index, array)
    返回新的数组
*/
const arr = [1,2,3,5,63,3];
var newArr = arr.map((item, index, array) => {
    return item + 1;
});

['1', '2', '3'].map(parseInt); // 1, NaN, NaN
// 因为parseInt接受两个参数， parseInt 经常被带着一个参数使用, 却消耗两个。第一个参数是一个表达式而第二个是callback function的基,
// Array.prototype.map 传递3个参数:
// 下面是解决方案
function returnInt(element) {
    return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]

/*
    2. reduce
    @params : Fun(preNum, item, index, array)
    累计值，当前值，整个数组
    reduce 数组只有一个值，不执行回调函数
*/
const arr = [1,2,3,5,63,3];
var newArr = [].reduce.call(arr, function (col, item) {
    console.log(this);
});
// 延伸
function descartes (arr) {
    // 判断多维数组
    if (typeof arr[0] === 'object') {

    } else {
        return arr;
    }
}

/*
    3. filter
    @params: Fun(item)
    返回新的数组
*/
