#### 浏览器复制粘贴

```js
// 动态添加input的方法
function copy (id) {
    var t = document.createElement('input');
    t.setAttribute('value', document.getElementById(id).innerHTML);
    document.body.appendChild(t);
    t.select();
    var content = window.getSelection().toString();
    document.execCommand('copy');
    document.body.removeChild(t);
}

```


