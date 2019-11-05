 // 高阶函数
 /*
    1. map,
    @params: Fun(item, index, array)
    返回新的数组
*/
var arr = [];
var newArr = arr.map((item, index, array) => {
    return item + 1;
});
/*
    2. reduce
    @params : Fun(preNum, item, array)
    累计值，当前值，整个数组

*/
/*
    3. filter
    @params: Fun(item)
    返回新的数组
*/
