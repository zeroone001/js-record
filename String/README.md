#### 字符串中间插入

```js
/*
* start: 插入的位置
* str: 插入的字符串
* usage: let newStr = '202001'.splice(4, '-');
*/
String.prototype.splice = function (start, str) {
    str = str + '';
    return this.slice(0, +start) + str + this.slice(+start);
};
```