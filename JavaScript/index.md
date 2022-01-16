```js
// 深拷贝
function deepClone (obj) {
    var _obj = JSON.parse(JSON.stringify(obj));
    return _obj;
}
function deepClone(obj) {
    let res = {};
    if (obj instanceof Array) {
        return [...obj];
    } else {
        /* 对象 */
        for(const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object') {
                res[key] = deepClone(value);
            } else {
                res[key] = value;
            }
        }
    }
    return res;
}
```

```css
/* 清除火狐浏览器无图片时的边框 */
img[src=''], img:not([src]) {
    opacity: 0;
}
```
```javascript
// 删除字符串中所有的空格
let str = 'dasd ad das';
str.replace(/\s*/g, '');
// 校验手机号
let phone = 18513439856;
let reg = /^1[3456789]\d{9}$/;
if (reg.test(phone)) {
    
}
// 随机生成1-100 数字
let num = Math.floor(Math.random()*100 + 1);

```


