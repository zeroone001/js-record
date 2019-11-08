
> from [JS正则表达式完整教程](https://juejin.im/post/5965943ff265da6c30653879#comment)


1. getURLQuery 获取URL参数

```javascript
let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
```

2. new RegExp(pattern, flags) 

有两种方法来创建一个RegExp对象：一是字面量、二是构造函数
