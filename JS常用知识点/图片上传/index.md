1. base64转blob

```javascript
function base64ToBlob (base64) {
    let base64Arr = base64.split(',');
    let base64String = '';
    let type = '';
    if (base64Arr.length > 1) {
        base64String = base64Arr[1];
        let prevstr = base64[0];
        type = prevstr.substring(prevstr.indexOf(':') + 1, prevstr.indexOf(';') + 1);
    }
    let bytes = atob(base64String);
    var bytesCode = new ArrayBuffer(bytes.length);
    var byteArray = new Uint8Array(bytesCode);
    for (var i = 0; i < bytes.length; i++) {
        byteArray[i] = bytes.charCodeAt(i);
    }
    return new Blob([byteArray], { type: imgtype });
}

```

2. charCodeAt()

方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元 (在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元) 。如果你想要整个代码点的值，使用 codePointAt()。

3. 图片旋转到正确的角度

```javascript
/**
 * 将图片旋转到正确的角度
 * （解决移动端上传的图片角度不正确的问题）
 * （旋转后返回的是base64，可以参照本目录下的convertBase64ToBlob.js，将base64还原为file input读取得到的文件对象）
 * @param {Dom Object} $fileInput 文件上传输入框
 * @param {Function} callback 旋转完成后的回调函数
 */
function resetImgOrientation($fileInput, callback) {
    // 绑定change事件
    $fileInput.onchange = function ($event) {
        var $target = $event.target;
        if ($target.files && $target.files[0]) {
            // 获取图片旋转角度
            getOrientation($target.files[0], function (orientation) {
                var reader = new FileReader();
                reader.readAsDataURL($target.files[0]);
                reader.onload = function(evt){
                    var base64 = evt.target.result;
                    // 将图片旋转到正确的角度
                    resetOrientation(base64, orientation, function (resultBase64) {
                        callback(resultBase64);
                    });
                }
            });
        }
    }
}

// 获取图片旋转的角度
function getOrientation(file, callback) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(e) {
        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
        var length = view.byteLength, offset = 2;
        while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++)
                    if (view.getUint16(offset + (i * 12), little) == 0x0112)
                        return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
            else if ((marker & 0xFF00) != 0xFF00) break;
            else offset += view.getUint16(offset, false);
        }
        return callback(-1);
    };
}
// 将图片旋转到正确的角度
function resetOrientation(srcBase64, srcOrientation, callback) {
    var img = new Image();
    img.onload = function() {
        var width = img.width,
            height = img.height,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext("2d");
        // set proper canvas dimensions before transform & export
        if ([5,6,7,8].indexOf(srcOrientation) > -1) {
            canvas.width = height;
            canvas.height = width;
        } else {
            canvas.width = width;
            canvas.height = height;
        }
        // transform context before drawing image
        switch (srcOrientation) {
            case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
            case 3: ctx.transform(-1, 0, 0, -1, width, height ); break;
            case 4: ctx.transform(1, 0, 0, -1, 0, height ); break;
            case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
            case 6: ctx.transform(0, 1, -1, 0, height , 0); break;
            case 7: ctx.transform(0, -1, -1, 0, height , width); break;
            case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
            default: ctx.transform(1, 0, 0, 1, 0, 0);
        }
        // draw image
        ctx.drawImage(img, 0, 0);
        // export base64
        callback(canvas.toDataURL('image/jpeg'));
    };
    img.src = srcBase64;
};
```

4. 上传方式

* base64 上传， 需要用到FileReader
```js
<input type="file" id="files" onchange="preview()" />
function preview () {
    var file = document.querySelector('#files').files[0];
    var reader = new FileReader();
    reader.onload = function () {
        console.log(reader.result);
    };
    // 会读取指定的blob或者File对象
    reader.readAsDataURL(file)
}
```

* 直接File文件，用FormData 上传
* 


