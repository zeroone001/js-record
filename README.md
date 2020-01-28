### javascript 技术记录

PS： 主要是记录一些碎片化的JS技术使用技巧

* axios 封装
* 类型转换
* 数组去重
* URL get Params

#### 注册事件监听器

```js
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}
```





