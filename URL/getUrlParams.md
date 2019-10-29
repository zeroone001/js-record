```javascript
// 获取URL参数
function getUrlParams (name) {
    let reg = new RegExp('(^|&)' + name + '=(^&*)(&|$)');
    let value = window.location.search.substr(1).match(reg);
    if (value) {
        return decodeURIComponent(value[2]);
    }
    return '';
}
```