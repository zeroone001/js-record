##### 遇到的坑

1. allowTaint: true 和 useCORS: true 都是解决跨域问题的方式，不同的是使用allowTaint 会对canvas造成污染，导致无法使用canvas.toDataURL 方法，所以这里不能使用allowTaint: true
2. 在跨域的图片里设置 crossOrigin="anonymous"  并且需要给imageUrl加上随机数
3. canvas.toDataURL('image/jpg') 是将canvas转成base64图片格式。
4. 背景图容易出无法解释的黑线

`crossOrigin="anonymous"`
