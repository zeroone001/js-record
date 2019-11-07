##### Object.defineProperty

作用： 为对象定义属性

```javascript
let obj = {};
Object.defineProperty(obj, 'name', {
    value: 'lys'
})
```

语法： Object.defineProperty(object, propertyname, descriptor)
```javascript
descriptor 是一个对象

{
    value: '',
    writable: false, // 该属性是否可写， 如果是false，任何改写都无效
    configurable: true, // 如果为false，则任何尝试删除目标属性或修改属性以下特性（writable, configurable, enumerable）的行为将被无效化
    enumerable: true, // 是否能在for-in循环中遍历出来或在Object.keys中列举出来。
    get: function () {

    },
    set: function () {

    }
}
// 注意 在调用Object.defineProperty()方法时，如果不指定， configurable， enumerable， writable特性的默认值都是false,
//【get】一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。
//【set】 一旦目标对象设置该属性，就会调用这个方法。默认为 undefined
```
