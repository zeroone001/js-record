##### 富文本知识记录

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

