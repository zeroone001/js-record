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
/*
    2. reduce
    @params : Fun(preNum, item, index, array)
    累计值，当前值，整个数组

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
