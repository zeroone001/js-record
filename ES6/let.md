# ES6之用let声明变量以及let loop机制

> [let](https://www.jianshu.com/p/bb25ea60e0bc)

```js
function test () {
    let a = b = 0;
    a++;
    return a; 
}
typeof a; // 'undefined'
// 这里b是一个全局变量
typeof b; // number
```


```js
function arrayFromValue(item) {
  return
    [item];
}

arrayFromValue(10); // undefined 
// 因为return后面换行了，相当于return;
```

```js
myVar;   // => undefined
myConst; // => ReferenceError 暂时死区
var myVar = 'value';
const myConst = 3.14;
```
