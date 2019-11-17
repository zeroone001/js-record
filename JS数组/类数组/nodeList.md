1. DOM 需要先转化成数组才能forEach


```javascript
// 最经典的方法
/* 
    Array的slice方法，如果不传参数的话，会返回原数组的一个拷贝
*/
let dom_arr = document.querySelectorAll('div');
let arr = Array.prototype.slice.call(dom_arr);
// 等同于
let arr = [].slice.call(dom_arr);

// 2
let arr = Array.from(dom_arr);
// 3
let arr = [...dom_arr];
```
