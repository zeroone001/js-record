/*
    创建对象
    这样const a = {} 会继承Oject.prototype 上所有的原型方法
    下面这种方式就不会
    使用for in 循环的时候就不用hasOwnProperty()
*/

function createObj () {
    return Object.create(null);
}

let _obj = createObj();
