##### ES6之用let声明变量以及let loop机制

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

