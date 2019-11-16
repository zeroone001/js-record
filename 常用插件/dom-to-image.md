生成图片的解决方案，感觉比html2canvas要好
```javascript
DomToImage.toPng(node, {"cacheBust":true}).then(function (dataUrl) {
    let img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
});
```