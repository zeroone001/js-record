#### 浏览器复制粘贴
> https://segmentfault.com/a/1190000007616673
```js
// 一，动态添加input的方法
function copy (id) {
    var t = document.createElement('input');
    t.setAttribute('value', document.getElementById(id).innerHTML);
    document.body.appendChild(t);
    t.select();
    var content = window.getSelection().toString();
    document.execCommand('copy');
    document.body.removeChild(t);
}
// 方法二 https://github.com/zenorocha/clipboard.js
// 使用第三方库
// 三，
var copyDOM = document.querySelector('#selector');  
  var range = document.createRange();  
  // 选中需要复制的节点
  range.selectNode(copyDOM);
  // 执行选中元素
  window.getSelection().addRange(range);
  // 执行 copy 操作
var successful = document.execCommand('copy');  
  try {  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('copy is' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
// 移除选中的元素
  window.getSelection().removeAllRanges();  
```


