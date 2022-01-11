# ES6

## Promise使用

https://zhuanlan.zhihu.com/p/138140285

## Promise和Async/Await

```javascript
/*
    简单说，就是异步执行之后，链式调用方式，执行回掉函数
    在then里面还能继续的执行下一个Promise
*/
function runAsync (url, param) {
    return new Promise((resolve,reject) => {
        axios({
            method: 'get',
            url,
            param
        }).then(res => {
            resolve(res.data);
        })
    })
}
runAsync().then(res => {
    console.log(res); // 'async'
    return runAsync2();
}).then(res => {
    
});
// 稍微提一下Promise.all()
Promise.all([runAsync1(), runAsync2(), runAsync3()]).then(function(results){
    console.log(results);
});
```

## 这是Promise的简单实现

```javascript
/*
    手写一个promise
*/
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Promise (fn) {
    const that = this;
    this.value = null;
    this.state = PENDING;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve (value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(cb => cb(that.value));
        }
    }

    function reject (value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => cb(that.value));
        }
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : v => v;

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled);
        that.rejectedCallbacks.push(onRejected);
    }

    if (that.state === RESOLVED) {
        onFulfilled(that.value);
    }

    if (that.state === REJECTED) {
        onRejected(that.value);
    }
}
```

## Promise.resolve

```js
// async函数，始终返回一个promise
async function a () {
    return await Promise.resolve('312');
}
const b = a();
console.log(b); // Promise {<pending>}
async function r () {
    return await 'ad';
}
const q = r();
console.log(q); // Promise {<pending>}
```

## Set 和 Map 的数据结构, WeakSet 和 WeakMap

WeakSet 和 WeakMap都是为了解决内存泄漏的问题

### WeakSet

相同点： 不重复值的集合

不同点：

1. WeakSet 的成员只能是对象，不能是其他类型的值, WeakSet 里面的引用，都不计入垃圾回收机制, WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息
2. 不可遍历
3. 有三个方法： `add, has, delete`
4. 没有size属性，没办法遍历他的成员
5. WeakSet 的一个作用是存储DOM节点，不用担心这些节点从文档移除时候，会引发内存泄漏

```jsx
ws.size // undefined
ws.forEach // undefined
ws.forEach(function(item){ console.log('WeakSet has ' + item)})
// TypeError: undefined is not a function

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
```

### WeakMap

1. WeakMap 跟Map相似，也是生成键值对的集合
2. 区别1： 只接收对象作为键名，null除外
3. 区别2： `WeakMap`的键名所指向的对象，不计入垃圾回收机制
4. 如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap
5. `WeakMap`的专用场合就是，它的键所对应的对象，可能会在将来消失
6. 没有遍历操作，也就是 `keys() ,values(), entries()`  也没有size
7. 只有四个方法，get set has delete

```jsx
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2
// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
```

```jsx
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
```

经典

```jsx
const wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element) // "some information"
```

用途

```jsx
let myWeakmap = new WeakMap();
myWeakmap.set(
  document.getElementById('logo'),
  {timesClicked: 0})
;
document.getElementById('logo').addEventListener('click', function() {
  let logoData = myWeakmap.get(document.getElementById('logo'));
  logoData.timesClicked++;
}, false);
```

## Reflect

1. 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect`对象上。现阶段，某些方法同时在`Object`和`Reflect`对象上部署，未来的新方法将只部署在`Reflect`对象上。也就是说，从`Reflect`对象上可以拿到语言内部的方法
2. 修改某些`Object`方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`

```jsx
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}
// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

1. 让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了函数行为

```jsx
// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true
```

1. `Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，就能在`Reflect`对象上找到对应的方法。

```jsx
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
```

1. 有了`Reflect`对象以后，很多操作会更易读

```jsx
// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1
// 新写法
Reflect.apply(Math.floor, undefined, [1.75]) // 1
```

`Reflect`对象一共有 13 个静态方法。

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

### Reflect.get

`Reflect.get`方法查找并返回`target`对象的`name`属性，如果没有该属性，则返回`undefined`。

```jsx
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
}
Reflect.get(myObject, 'foo') // 1
Reflect.get(myObject, 'bar') // 2
Reflect.get(myObject, 'baz') // 3
```

如果`name`属性部署了读取函数（getter），则读取函数的`this`绑定`receiver`。

```jsx
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};
var myReceiverObject = {
  foo: 4,
  bar: 4,
};
Reflect.get(myObject, 'baz', myReceiverObject) // 8
```

注意，如果 `Proxy`对象和 `Reflect`对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了`receiver`，那么`Reflect.set`会触发`Proxy.defineProperty`拦截。

```jsx
let p = {
  a: 'a'
};
let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};
let obj = new Proxy(p, handler);
obj.a = 'A';
// set
// defineProperty
```

上面代码中，`Proxy.set`拦截里面使用了`Reflect.set`，而且传入了`receiver`，导致触发`Proxy.defineProperty`拦截。这是因为`Proxy.set`的`receiver`参数总是指向当前的 `Proxy`实例（即上例的`obj`），而`Reflect.set`一旦传入`receiver`，就会将属性赋值到`receiver`上面（即`obj`），导致触发`defineProperty`拦截。如果`Reflect.set`没有传入`receiver`，那么就不会触发`defineProperty`拦截。

### Reflect.has(obj, name)

对应 name in obj 

### Reflect.deleteProperty(obj, name)

`Reflect.deleteProperty`方法等同于`delete obj[name]`，用于删除对象的属性。

```jsx
const myObj = { foo: 'bar' };
// 旧写法
delete myObj.foo;
// 新写法
Reflect.deleteProperty(myObj, 'foo');
```

该方法返回一个布尔值。如果删除成功，或者被删除的属性不存在，返回`true`；删除失败，被删除的属性依然存在，返回`false`。

### Reflect.construct(target, args)

`Reflect.construct`方法等同于`new target(...args)`，这提供了一种不使用`new`，来调用构造函数的方法。

```jsx
function Greeting(name) {
  this.name = name;
}
// new 的写法
const instance = new Greeting('张三');
// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);
```

### Reflect.getPrototypeOf(obj)

`Reflect.getPrototypeOf`方法用于读取对象的`__proto__`属性，对应`Object.getPrototypeOf(obj)`。

```jsx
const myObj = new FancyThing();
// 旧写法
Object.getPrototypeOf(myObj) === FancyThing.prototype;
// 新写法
Reflect.getPrototypeOf(myObj) === FancyThing.prototype;
```

`Reflect.getPrototypeOf`和`Object.getPrototypeOf`的一个区别是，如果参数不是对象，`Object.getPrototypeOf`会将这个参数转为对象，然后再运行，而`Reflect.getPrototypeOf`会报错。

### Reflect.setPrototypeOf(obj, newProto)

`Reflect.setPrototypeOf`方法用于设置目标对象的原型（prototype），对应`Object.setPrototypeOf(obj, newProto)`方法。它返回一个布尔值，表示是否设置成功。

```jsx
const myObj = {};
// 旧写法
Object.setPrototypeOf(myObj, Array.prototype);
// 新写法
Reflect.setPrototypeOf(myObj, Array.prototype);
myObj.length // 0
```

### Reflect.apply(func, thisArg, args)

```jsx
const ages = [11, 33, 12, 54, 18, 96];
// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);
// 新写法
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);
```

### Reflect.defineProperty(obj, propKey, attributes)

为对象定义属性

`Reflect.defineProperty`方法基本等同于`Object.defineProperty`，用来为对象定义属性。未来，后者会被逐渐废除，请从现在开始就使用`Reflect.defineProperty`代替它。

```jsx
function MyDate() {
  /*…*/
}
// 旧写法
Object.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});
// 新写法
Reflect.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});
```

这个方法可以与`Proxy.defineProperty`配合使用。

```jsx
const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});
p.foo = 'bar';
// {value: "bar", writable: true, enumerable: true, configurable: true}
p.foo // "bar"
```

### Reflect.getOwnPropertyDescriptor(target, propertyKey)

`Reflect.getOwnPropertyDescriptor`基本等同于`Object.getOwnPropertyDescriptor`，用于得到指定属性的描述对象，将来会替代掉后者。

```jsx
var myObject = {};
Object.defineProperty(myObject, 'hidden', {
  value: true,
  enumerable: false,
});
// 旧写法
var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');
// 新写法
var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');
```

### Reflect.isExtensible (target)

`Reflect.isExtensible`方法对应`Object.isExtensible`，返回一个布尔值，表示当前对象是否可扩展。

```jsx
const myObject = {};
// 旧写法
Object.isExtensible(myObject) // true
// 新写法
Reflect.isExtensible(myObject) // true
```

### Reflect.preventExtensions(target)

`Reflect.preventExtensions`对应`Object.preventExtensions`方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

### Reflect.ownKeys(target)


`Reflect.ownKeys`方法用于返回对象的所有属性，基本等同于`Object.getOwnPropertyNames`与`Object.getOwnPropertySymbols`之和。

```jsx

var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};
// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']
Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]
// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
```

## Proxy 

### Proxy实现观察者模式

先定义了一个Set集合，所有观察者函数都放进这个集合。
然后，observable函数返回原始对象的代理，拦截赋值操作。
拦截函数set之中，会自动执行所有观察者。

```js
const observers = new Set();

/* 将函数放到 Set 里面 */
const observe = fn => observers.add(fn);

const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  /* 执行函数调用 */
  observers.forEach(observer => observer());
  return result;
}
```




