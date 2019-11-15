1. DOM 需要先转化成数组才能forEach


```javascript
let dom_arr = document.querySelectorAll('div');
let arr = Array.prototype.slice.call(dom_arr);
```
