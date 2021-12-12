### javascript 技术记录

PS： 主要是记录一些碎片化的JS技术使用技巧

* axios 封装
* 类型转换
* 数组去重
* URL get Params

### 注册事件监听器

```js
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}
```

### 原生JS实现事件委托
```js
// 事件委托具体实现
var ul = document.getElementById("ul");
ul.onclick = function (event) {
    event = event || window.event;
    var target = event.target;
    // 获取目标元素
    if (target.nodeName == 'LI') {
        alert(target.innerHTML);
    }
}
// 为按钮绑定点击事件
var btn = document.getElementById('btn');
btn.onclick = function () {
    var li = document.createElement('li');
    // 新增li的内容为ul当前子元素的个数
    li.textContent = ul.children.length;
    ul.appendChild(li);
}
```

#### JS 中二进制和十进制的转化

```js
var a = 40;
a.toString(2); // 二进制

parseInt( "10010111100",2); // 转化成十进制git
```
#### HTML lang

```html
<!-- 推荐使用 -->
<!-- Hans 简体汉字 zh 中国字或中国话 -->
<html lang="zh-Hans"></html>
```
#### js中小数相加小数点后面多出很多位

javascript浮点运算,使用toFixed(2)函数把结果保留小数点后两位

#### 打码
mosaic

### 前端研发工具集

https://appworks.site/

### 在原型上实现 map 方法

```js
// 全局变量
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // 只修改这一行下面的代码
  this.forEach((item) => {
    newArray.push(callback(item))
  });
  // 只修改这一行上面的代码
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

## 计算数字的平方

```js
Math.pow(4, 2) // 16， 4的平方
```

## 判断是否是整数

```js
const a = 1.1
// es6
Number.isInteger(a)

// 取余运算符
a % 1 === 0 // 任何整数都会被1整除，即余数是0

// Math.floor()
Math.floor(a) === a

// 位运算

a | 0 === a

```

## **使用 sort 方法按字母顺序给数组排序**

```js
function alphabeticalOrder(arr) {
  // 只修改这一行下面的代码

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // 只修改这一行上面的代码
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

