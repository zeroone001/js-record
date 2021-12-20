#### 创建
```js
/*
    创建对象
    这样const a = {} 会继承Oject.prototype 上所有的原型方法
    下面这种方式就不会
    使用for in 循环的时候就不用hasOwnProperty()
*/

function createObj () {
    return Object.create(null);
}

let _obj = createObj();
```

#### 字符串转对象

```js
var a = JSON.stringify({n:1});
var json = (new Function("return " + a))();
```
#### 对象使用的小技巧

可选链，可惜现在都不支持

```javascript
var obj = {
    qw: {
        er: {
            ww: '12312'
        }
    }
};
obj?.qw?.er?.ww
```
#### new 创建一个对象的过程

```js
function Person (age, name) {
    this.age = age;
    this.name = name;
    console.log(this);
}
```



