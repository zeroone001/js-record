# Javascript

## 注册事件监听器

## 代理 mitmproxy

安装教程： https://www.jianshu.com/p/bfa21e0252b6



https://mitmproxy.org/



https://github.com/mitmproxy/mitmproxy

`brew install mitmproxy`

https://www.jianshu.com/p/bea984d27cd2



## 修改brew的镜像
### 原生JS实现事件委托
```js
// 事件委托具体实现
var ul = document.getElementById("ul");
ul.onclick = function (event) {
    event = event || window.event;
    var target = event.target;
    // 获取目标元素
    if (target.nodeName == 'LI') {
        alert(target.innerHTML);
    }
}
// 为按钮绑定点击事件
var btn = document.getElementById('btn');
btn.onclick = function () {
    var li = document.createElement('li');
    // 新增li的内容为ul当前子元素的个数
    li.textContent = ul.children.length;
    ul.appendChild(li);
}
```



```bash
# 替换brew.git
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 替换homebrew-core.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 刷新源
brew update
```



```bash
替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git

# 刷新源
brew update
```



1. 启动： `mitmproxy -p 8888`

2. 手机配置代理，在WiFi里面，手机输入IP和端口号

3. 手机安装证书

4. IOS：浏览器输入网址 [mitm.it](http://mitm.it/)  按照步骤下载安装，然后，设置-通用-描述文件-已下载的描述文件-选择mitmproxy，安装；设置-关于本机-证书信任设置-mitmproxy开启

5. ##### Android安装

   * 1)设置-无线局域网-点击wifi名称-配置代理-手动，服务器写入测试工具对应的IP地址，端口亦然，存储
   * 2)chrome或者火狐浏览器访问地址- [mitm.it](http://mitm.it/)，如第一步设置正确，此时可看到证书下载页，点击Android证书
   * 3)允许下载
   * 4)选择证书，安装即可

##### PC安装

* 1)设置-网络-高级-网页代理（HTTP）,网页代理服务器写入对应的IP地址，端口亦然
* 2)网页代理（HTTPS）,安全网页代理服务器写入对应的IP地址，端口亦然
* 3)存储以上配置
* 4)safari或者chrome访问地址-[mitm.it](http://mitm.it/)，选择macOS证书
* 5)下载后双击安装
* 6)打开-钥匙串访问（在启动台内可找到，是一个应用）
* 7)种类-所有项目-右上角搜索-mitmproxy-双击
* 8)信任-使用此证书时-选择-始终信任-关闭，输入密码即可
https://appworks.site/

### 在原型上实现 map 方法

```js
// 全局变量
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // 只修改这一行下面的代码
  this.forEach((item) => {
    newArray.push(callback(item))
  });
  // 只修改这一行上面的代码
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

## 计算数字的平方

```js
Math.pow(4, 2) // 16， 4的平方
```

## 判断是否是整数

```js
const a = 1.1
// es6
Number.isInteger(a)

// 取余运算符
a % 1 === 0 // 任何整数都会被1整除，即余数是0

// Math.floor()
Math.floor(a) === a

// 位运算

a | 0 === a

```

## 使用 sort 方法按字母顺序给数组排序

```js
function alphabeticalOrder(arr) {
  // 只修改这一行下面的代码

  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // 只修改这一行上面的代码
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

## 使用 split 方法将字符串拆分成数组

```js
// 把单词拆分出来
function splitify(str) {
  // 只修改这一行下面的代码
  return str.split(/[^a-zA-Z]/);
  // 只修改这一行上面的代码
}

splitify("Hello World,I-am code");
```

## 使用 some 方法检查数组中是否有元素是否符合条件

```js
// 这里跟 every 一起思考
function checkPositive(arr) {
  // 只修改这一行下面的代码

  return arr.some(item => {
    return item > 0
  })
  // 只修改这一行上面的代码
}

checkPositive([1, 2, 3, -4, 5]);
```

## 函数柯里化和局部调用

柯里化在不能一次为函数提供所有参数情况下很有用。 因为它可以将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接受该参数

```js
function add(x) {
  // 只修改这一行下面的代码

  return function(y){
    return function(z) {
      return x+y+z
    }
  }
  // 只修改这一行上面的代码
}

add(10)(20)(30);
```

## 数组降维度

```js
// 1 es6 flat
const newArr = oldArr.flat(Infinity);
// 2 reduce 
const newArr = oldArr.reduce((prev, curr) => (prev.concat(curr)), []);
// 3 concat 
const newArr = [].concat(...oldArr);
const newnewArr = Array.prototype.concat.apply([], oldArr);
// 递归
const newArr = [];

const ergodic = (arr) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      ergodic(item);
    } else {
      newArr.push(item);
    }
  })
}
```

## 如何优雅地链式取值

https://juejin.cn/post/6844903681029046279

```js
/* 这是自己写的，没成功 */
const isObject = (val) =>
  val !== null && typeof val === 'object'
function getDeepProp (obj) {
  return new Proxy(obj, {
    get (target, key, receiver) {
      const res = Reflect.get(target, key, receiver)
      if (isObject(res)) {
        return getDeepProp(res)
      }
      if (!res) return {}
      return res;
    }
  })
}
var c = {a: {b : [1,2,3] }}
const cProxy = getDeepProp(c);
/* 下面是loadsh 的 */
function get (obj, props, def) {
    if((obj == null) || obj == null || typeof props !== 'string') return def;
    const temp = props.split('.');
    const fieldArr = [].concat(temp);
    temp.forEach((e, i) => {
        if(/^(\w+)\[(\w+)\]$/.test(e)) {
            const matchs = e.match(/^(\w+)\[(\w+)\]$/);
            const field1 = matchs[1];
            const field2 = matchs[2];
            const index = fieldArr.indexOf(e);
            fieldArr.splice(index, 1, field1, field2);
        }
    })
    return fieldArr.reduce((pre, cur) => {
        const target = pre[cur] || def;

        if(target instanceof Array) {
            return [].concat(target);
        }
        if(target instanceof Object) {
            return Object.assign({}, target)
        }
        return target;
    }, obj)
}
var c = {a: {b : [1,2,3] }}
get(c ,'a.b')     // [1,2,3]
get(c, 'a.b[1]')  // 2
get(c, 'a.d', 12)  // 12

/* 下面是Proxy的形式 */
function pointer(obj, path = []) {
    return new Proxy(() => {}, {
        get (target, property) {
            return pointer(obj, path.concat(property))
        },
        apply (target, self, args) {
            let val = obj;
            let parent;
            for(let i = 0; i < path.length; i++) {
                if(val === null || val === undefined) break;
                parent = val;
                val = val[path[i]]    
            }
            if(val === null || val === undefined) {
                val = args[0]
            }
            return val;
        }
    })
}
let c = {a: {b: [1, ,2 ,3]}}

pointer(c).a();   // {b: [1,2,3]}

pointer(c).a.b(); // [1,2,3]

pointer(d).a.b.d('default value');  // default value

```

## XMLHttpRequest

```js
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // 在这行下面添加代码
const req = new XMLHttpRequest();
req.open('GET', '/json/cats.json', true);
req.send();
req.onload = function () {
    const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);

}
    };
  });
```
POST 

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

## 扫描二维码登录PC网站

### 二维码登录本质

二维码登录本质上也是一种登录认证方式。既然是登录认证，要做的也就两件事情：

1. 告诉系统我是谁
2. 向系统证明我是谁

### 扫描二维码登录的一般步骤

1. 扫码前，手机端应用是已登录状态，PC端显示一个二维码，等待扫描
2. 手机端打开应用，扫描PC端的二维码，扫描后，会提示"已扫描，请在手机端点击确认"
3. 用户在手机端点击确认，确认后PC端登录就成功了

### 具体流程

1. 生成二维码
  
PC端向服务端发起请求，告诉服务端，我要生成用户登录的二维码，并且把PC端设备信息也传递给服务端
服务端收到请求后，它生成二维码ID，并将二维码ID与PC端设备信息进行绑定

然后把二维码ID返回给PC端
PC端收到二维码ID后，生成二维码(二维码中肯定包含了ID)
为了及时知道二维码的状态，客户端在展现二维码后，PC端不断的轮询服务端，比如每隔一秒就轮询一次，请求服务端告诉当前二维码的状态及相关信息，或者直接使用websocket，等待在服务端完成登录后进行通知

2. 扫描二维码

用户用手机去扫描PC端的二维码，通过二维码内容取到其中的二维码ID
再调用服务端API将移动端的身份信息与二维码ID一起发送给服务端
服务端接收到后，它可以将身份信息与二维码ID进行绑定，生成临时token。然后返回给手机端
因为PC端一直在轮询二维码状态，所以这时候二维码状态发生了改变，它就可以在界面上把二维码状态更新为已扫描

3. 状态确认

手机端在接收到临时token后会弹出确认登录界面，用户点击确认时，手机端携带临时token用来调用服务端的接口，告诉服务端，我已经确认
服务端收到确认后，根据二维码ID绑定的设备信息与账号信息，生成用户PC端登录的token
这时候PC端的轮询接口，它就可以得知二维码的状态已经变成了"已确认"。并且从服务端可以获取到用户登录的token
到这里，登录就成功了，后端PC端就可以用token去访问服务端的资源了

## 使用input标签上传图片时，怎样触发默认拍照功能？

capture 属性用于指定文件上传控件中媒体拍摄的方式。

可选值：

user 前置
environment 后置
camera 相机
camcorder 摄像机
microphone 录音

```html
<input type='file' accept='image/*;' capture='camera'>
```

## js中数组是如何在内存中存储的？

数组不是以一组连续的区域存储在内存中，而是一种哈希映射的形式。它可以通过多种数据结构来实现，其中一种是链表。

js分为基本类型和引用类型：

基本类型是保存在栈内存中的简单数据段，它们的值都有固定的大小，保存在栈空间，通过按值访问；
引用类型是保存在堆内存中的对象，值大小不固定，栈内存中存放的该对象的访问地址指向堆内存中的对象，JavaScript不允许直接访问堆内存中的位置，因此操作对象时，实际操作对象的引用

## input上传文件可以同时选择多张吗？怎么设置？

```html
<input type="file" name="files" multiple/>
```

## 直接在script标签中写 export 为什么会报错？

现代浏览器可以支持用 script 标签引入模块或者脚本，如果要引入模块，必须给 script 标签添加 type=“module”。如果引入脚本，则不需要 type。

## 如何使用css来实现禁止移动端页面的左右划动手势？

CSS属性 touch-action 用于设置触摸屏用户如何操纵元素的区域(例如，浏览器内置的缩放功能)。

```css
html{
 touch-action: none;
 touch-action: pan-y;
}
/* 还可以 */
html{
 width: 100vw;
 overflow-x: hidden;
}
```

## js 中的倒计时，怎么实现纠正偏差

在前端实现中我们一般通过 setTimeout 和 setInterval 方法来实现一个倒计时效果。但是使用这些方法会存在时间偏差的问题，这是由于 js 的程序执行机制造成的，setTimeout 和 setInterval 的作用是隔一段时间将回调事件加入到事件队列中，因此事件并不是立即执行的，它会等到当前执行栈为空的时候再取出事件执行，因此事件等待执行的时间就是造成误差的原因。

一般解决倒计时中的误差的有这样两种办法：

（1）第一种是通过前端定时向服务器发送请求获取最新的时间差，以此来校准倒计时时间。

（2）第二种方法是前端根据偏差时间来自动调整间隔时间的方式来实现的。这一种方式首先是以 setTimeout 递归的方式来实现倒计时，然后通过一个变量来记录已经倒计时的秒数。每一次函数调用的时候，首先将变量加一，然后根据这个变量和每次的间隔时间，我们就可以计算出此时无偏差时应该显示的时间。然后将当前的真实时间与这个时间相减，这样我们就可以得到时间的偏差大小，因此我们在设置下一个定时器的间隔大小的时候，我们就从间隔时间中减去这个偏差大小，以此来实现由于程序执行所造成的时间误差的纠正。

```js
const interval = 1000 // 设定倒计时规则为每秒倒计时
let totalCount = 30000 // 设定总倒计时长为30s
let count = 0 // 记录递归已执行次数，以倒计时时间间隔 interval=1s 为例，那么count就相当于如果没有时间偏差情况下的理想执行时间

const startTime = new Date().getTime(); // 记录程序开始运行的时间
let timeoutID = setTimeout(countDownFn, interval)

// 倒计时回调函数
function countDownFn() {
    count++ // count自增，记录理想执行时间
    // 获取当前时间减去刚开始记录的startTime再减去理想执行时间得到时间偏差：等待执行栈为空的时间
    const offset = new Date().getTime() - startTime - count * interval
    let nextTime = interval - offset // 根据时间偏差，计算下次倒计时设定的回调时间，从而达到纠正的目的
    if (nextTime < 0 ) {
        nextTime = 0
    }
    totalCount -= interval
    if (totalCount < 0) {
        clearTimeout(timeoutID)
    } else {
        timeoutID = setTimeout(countDownStart, nextTime)
    }
}
```
## 封装一个 javascript 的类型判断函数

```ts
function getType(value) {
  // 判断数据是 null 的情况
  if (value === null) {
    return value + "";
  }

  // 判断数据是引用类型的情况
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(" ")[1].split("");

    type.pop();

    return type.join("").toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}

```