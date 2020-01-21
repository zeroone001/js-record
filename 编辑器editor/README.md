##### 富文本知识记录

> [富文本](https://mp.weixin.qq.com/s/tx8y00WXa0OWFEnmSj5caw)

1. contenteditable="true"

2. document.execCommand
   
既然我们可以对上面的 div 随意编辑，那具体怎么编辑呢，目前好像也还是只能输入文本，要怎样才能进行其他操作呢（比如加粗、倾斜、插入图片等等）🤔？其实浏览器给我们提供了这样的一个方法 `document.execCommand`，通过它我们就能够操纵上面的可编辑区

```javascript
// document.execCommand(命令名称，是否展示用户界面，命令需要的额外参数)
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

// 加粗
document.execCommand('bold', false, null);
// 添加图片
document.execCommand('insertImage', false, url || base64);
// 把一段文字用 p 标签包裹起来
document.execCommand('formatblock', false, '<p>');
```

3. Selection 和 Range 对象

所以通常我们可以用 `letrange=window.getSelection().getRangeAt(0)` 来获取选中的内容信息（ getRangeAt 接受一个索引值，因为会有多个 Range，而现在只有一个，所以写0）。


此外 Selection 对象还有几个常用的方法， `addRange、 removeAllRanges、 collapse 和 collapseToEnd` 等等

4. notice

* 有的同学可能用的不是 button 标签，然后执行命令就会无效，是因为点击其他标签大多都会造成先失去焦点（或者不知不觉就突然失去焦点了），再执行点击事件，此时没有选区或光标所以会没有效果，这点要留意一下。
* 我们执行的是原生的 document.execCommand 方法，浏览器自身会对 contenteditable 这个可编辑区维护一个 undo 栈和一个 redo 栈，所以我们才能执行前进和后退的操作，如果我们改写了原生方法，就会破坏原有的栈结构，这时就需要自己去维护，那就麻烦了
* style 里面如果加上 scope 的话，里面的样式对编辑区的内容是不生效的，因为编辑区里面是后来才创建的元素，所以要么删了 scope，要么用 /deep/ 解决（Vue 是这样）

#### 粘贴无样式

```js
editor.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand("insertHTML", false, text);
});
```
#### form 表单上传图片
```js
<form target="iframe"></form>
iframe.addEventListener('load', function(){

});
```