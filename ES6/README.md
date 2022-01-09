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