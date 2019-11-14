##### 遇到的坑

> [坑](https://juejin.im/post/5b31d98ee51d4558817e14f8)

1. allowTaint: true 和 useCORS: true 都是解决跨域问题的方式，不同的是使用allowTaint 会对canvas造成污染，导致无法使用canvas.toDataURL 方法，所以这里不能使用allowTaint: true
2. 在跨域的图片里设置 `crossOrigin="anonymous" ` 并且需要给imageUrl加上随机数、
3. header("Access-Control-Allow-Origin: *"); 服务器需要配置
4. canvas.toDataURL('image/jpg') 是将canvas转成base64图片格式。
5. 背景图容易出无法解释的黑线
6. 背景图出不来的话，尝试换成前景图
7. 如果还是不行的话，尝试`html2canvas(document.getElementById('invoice-panel'), { letterRendering: 1, allowTaint : true, onrendered : function (canvas) { } });`
