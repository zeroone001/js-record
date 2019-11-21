1. 清空数组的方式 var a = [1,3,5];

* a.length = 0;
* a = [];

2. 数组元素上下移动？

```javascript
// splice 返回被删除元素的一个新组成的数组
var arr = [1,3,4,6];
function up (index) {
    if (index === 0) return;
    arr[index] = arr.splice(index-1, 1, arr[index])[0];
}
function down (index) {
    if (index === arr.length - 1) return;
    arr[index] = arr.splice(index+1, 1, arr[index])[0];
}
```
