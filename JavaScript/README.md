## javascript

PS： 主要是记录一些碎片化的JS技术使用技巧

* axios 封装
* 类型转换
* 数组去重
* URL get Params

### Event Loop

https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

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

### JS 中二进制和十进制的转化

```js
var a = 40;
a.toString(2); // 二进制

parseInt( "10010111100",2); // 转化成十进制git
```
### HTML lang

```html
<!-- 推荐使用 -->
<!-- Hans 简体汉字 zh 中国字或中国话 -->
<html lang="zh-Hans"></html>
```
### js中小数相加小数点后面多出很多位

javascript浮点运算,使用toFixed(2)函数把结果保留小数点后两位

### 打码
mosaic

### CORS 跨域资源共享

CORS需要浏览器和服务器同时支持。
目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。
整个CORS通信过程，都是浏览器自动完成，不需要用户参与。
对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

### 前端研发工具集

https://appworks.site/