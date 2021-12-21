###### Promise使用

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

##### 这是Promise的简单实现
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

#### Promise.resolve
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