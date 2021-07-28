/*
    Object.defineProperty()
    为对象定义属性，
    有两种方式，不能混合使用
    数据描述符
    存取描述符

    两者共有的属性： configrable和 enumberable

*/

// 数据描述符
var Person = {};
// value和writable ---> 数据描述符
Object.defineProperty(Person, 'name', {
    value: 'lys',
    writable: true // 默认是false, 代表是否可以修改
});


// 存取描述符
// configrable: false 不能删除当前的属性，且不能重新配置当前属性的描述符
var Person = {}
var t = null
Object.defineProperty(Person, 'name', {
    configrable: true, // 可以删除当前的属性
    enumerable: true, // 可以遍历到当前key

    get () {
        return t
    },
    set (newVal) {
        temp = newVal;
    }
})