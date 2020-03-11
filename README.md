### javascript 技术记录

PS： 主要是记录一些碎片化的JS技术使用技巧

* axios 封装
* 类型转换
* 数组去重
* URL get Params

#### 注册事件监听器

```js
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}
```

#### 原生JS实现事件委托
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



