# Javascriptå

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

## 如何确定页面的可用性时间，什么是 Performance API？

Performance API 用于精确度量、控制、增强浏览器的性能表现。这个 API 为测量网站性能，提供以前没有办法做到的精度。

使用 getTime 来计算脚本耗时的缺点，首先，getTime方法（以及 Date 对象的其他方法）都只能精确到毫秒级别（一秒的千分之一），想要得到更小的时间差别就无能为力了。其次，这种写法只能获取代码运行过程中的时间进度，无法知道一些后台事件的时间进度，比如浏览器用了多少时间从服务器加载网页。

为了解决这两个不足之处，ECMAScript 5引入“高精度时间戳”这个 API，部署在 performance 对象上。它的精度可以达到1毫秒 的千分之一（1秒的百万分之一）。

navigationStart：当前浏览器窗口的前一个网页关闭，发生 unload 事件时的 Unix 毫秒时间戳。如果没有前一个网页，则等于 fetchStart 属性。

loadEventEnd：返回当前网页 load 事件的回调函数运行结束时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。

根据上面这些属性，可以计算出网页加载各个阶段的耗时。比如，网页加载整个过程的耗时的计算方法如下：

var t = performance.timing;
var pageLoadTime = t.loadEventEnd - t.navigationStart;

## 怎么使用 js 实现拖拽功能？

一个元素的拖拽过程，我们可以分为三个步骤:

第一步是鼠标按下目标元素
第二步是鼠标保持按下的状态移动鼠标
第三步是鼠标抬起，拖拽过程结束
这三步分别对应了三个事件，mousedown 事件，mousemove 事件和 mouseup 事件。只有在鼠标按下的状态移动鼠标我们才会执行拖拽事件，因此我们需要在 mousedown 事件中设置一个状态来标识鼠标已经按下，然后在 mouseup 事件中再取消这个状态。在 mousedown 事件中我们首先应该判断，目标元素是否为拖拽元素，如果是拖拽元素，我们就设置状态并且保存这个时候鼠标的位置。然后在 mousemove 事件中，我们通过判断鼠标现在的位置和以前位置的相对移动，来确定拖拽元素在移动中的坐标。最后 mouseup 事件触发后，清除状态，结束拖拽事件。


## mouseover 和 mouseenter 有什么区别？

当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。

由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，但是却不会触发 mouseenter 和 mouseleave 事件。

## get 请求是否限制了传参长度？

HTTP 协议未规定 GET 和 POST 的长度限制
GET 的最大长度显示是因为浏览器和 web 服务器限制了 URI 的长度
不同的浏览器和 WEB 服务器，限制的最大长度不一样
要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte

## Js 动画与 CSS 动画区别及相应实现

CSS3 的动画的优点
在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化
代码相对简单
缺点
在动画控制上不够灵活
兼容性不好
JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。对于一些复杂控制的动画，使用 javascript 会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧

## 异步编程有哪些实现方式？

js 中的异步机制可以分为以下几种：

第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。

## 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？

MVC、MVP 和 MVVM 是三种常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结构，优化我们的开发效率。

比如说我们实验室在以前项目开发的时候，使用单页应用时，往往一个路由页面对应了一个脚本文件，所有的页面逻辑都在一个脚本文件里。页面的渲染、数据的获取，对用户事件的响应所有的应用逻辑都混合在一起，这样在开发简单项目时，可能看不出什么问题，当时一旦项目变得复杂，那么整个文件就会变得冗长，混乱，这样对我们的项目开发和后期的项目维护是非常不利的。

MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Co ntroller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。

MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中我们使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的 Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此我们可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。

MVVM 模式中的 VM，指的是 ViewModel，它和 MVP 的思想其实是相同的，不过它通过双向的数据绑定，将 View 和 Model 的同步更新给自动化了。当 Model 发生变化的时候，ViewModel 就会自动更新；ViewModel 变化了，View 也会更新。这样就将 Presenter 中的工作给自动化了。我了解过一点双向数据绑定的原理，比如 vue 是通过使用数据劫持和发布订阅者模式来实现的这一功 能。

## offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？

clientWidth/clientHeight 返回的是元素的内部宽度，它的值只包含 content + padding，如果有滚动条，不包含滚动条。

clientTop 返回的是上边框的宽度。

clientLeft 返回的左边框的宽度。

offsetWidth/offsetHeight 返回的是元素的布局宽度，它的值包含 content + padding + border 包含了滚动条。

offsetTop 返回的是当前元素相对于其 offsetParent 元素的顶部的距离。

offsetLeft 返回的是当前元素相对于其 offsetParent 元素的左部的距离。

scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸。

scrollTop 属性返回的是一个元素的内容垂直滚动的像素数。

scrollLeft 属性返回的是元素滚动条到元素左边的距离。

## Unicode 和 UTF-8 之间有什么关系？


Unicode 是一种字符集合，现在可容纳 100 多万个字符。每个字符对应一个不同的 Unicode 编码，它只规定了符号的二进制代码，却没有规定这个二进制代码在计算机中如何编码传输。

UTF-8 是一种对 Unicode 的编码方式，它是一种变长的编码方式，可以用 1~4 个字节来表示一个字符。

## 怎么检测浏览器版本？

检测浏览器版本一共有两种方式：

一种是检测 window.navigator.userAgent 的值，但这种方式很不可靠，因为 userAgent 可以被改写，并且早期的浏览器如 ie，会通过伪装自己的 userAgent 的值为 Mozilla 来躲过服务器的检测。

第二种方式是功能检测，根据每个浏览器独有的特性来进行判断，如 ie 下独有的 ActiveXObject。

## 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？

移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此
浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。

有三种办法来解决这个问题：

通过 meta 标签禁用网页的缩放。
通过 meta 标签将网页的 viewport 设置为 ideal viewport。
调用一些 js 库，比如 FastClick
click 延时问题还可能引起点击穿透的问题，就是如果我们在一个元素上注册了 touchStart 的监听事件，这个事件会将这个元素隐藏掉，我们发现当这个元素隐藏后，触发了这个元素下的一个元素的点击事件，这就是点击穿透。

## 如何判断当前脚本运行在浏览器还是 node 环境中？

this === window ? 'browser' : 'node';

## 实现一个对象的 flatten 方法

```js
function objectFlat(obj = ''){
  const res = {}
  function flat(item , preKey = ''){
    Object.entries(item).forEach(([key,value]) => {
      let newKey = key
      if (Array.isArray(item)){
        // console.log('是数组')
        newKey = preKey ? `${preKey}[${key}]` : key
      }else{
        newKey = preKey ? `${preKey}.${key}` : key
      }
      if (value && typeof value === 'object'){
        flat(value , newKey)
      }else{
        res[newKey] = value
      }
    })
  }
  flat(obj)
  return res
}

const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source));
const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};
console.log(objectFlat(obj));

```

## setTimeout 为什么不能保证能够及时执行?

> 主线程从任务队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop。

setTimeout 并不能保证执行的时间，是否及时执行取决于 JavaScript 线程是拥挤还是空闲。

浏览器的JS引擎遇到setTimeout，拿走之后不会立即放入异步队列，同步任务执行之后，timer模块会到设置时间之后放到异步队列中。js引擎发现同步队列中没有要执行的东西了，即运行栈空了就从异步队列中读取，然后放到运行栈中执行。所以setTimeout可能会多了等待线程的时间。

这时setTimeout函数体就变成了运行栈中的执行任务，运行栈空了，再监听异步队列中有没有要执行的任务，如果有就继续执行，如此循环，就叫Event Loop。

## 介绍些 setTimeout 的运行机制

JavasScript引擎是基于事件驱动和单线程执行的，JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行程序，即主线程。那么单线程的JavasScript是怎么实现“非阻塞执行”呢？是通过任务队列。

所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。但是如果有些任务很慢时（比如Ajax操作从网络读取数据），我还是要等结果在执行后一个任务吗？于是，有了一种异步任务。

同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；而异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有主线程执行完毕，主线程去通知"任务队列"，某个异步任务可以执行了，该任务才会进入主线程执行。

所以js的运行机制如下：

所有同步任务都在主线程上执行，形成一个执行栈（Call Stack）
主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件
一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
主线程不断重复上面的第三步。
setTimeout运行机制
setTimeout 和 setInterval的运行机制，其实就是将指定的代码移出本次执行，等到下一轮 Event Loop 时，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮 Event Loop 时重新判断。

这意味着，setTimeout指定的代码，必须等到本次执行的所有同步代码都执行完，才会执行。


## 如何将 unknown 类型指定为一个更具体的类型

1. typeof 进行类型判断
2. as 类型断言

使用 typeof 进行类型判断（这些缩小类型范围的技术都有助于TS基于控制流程下的类型分析）
```ts
function unknownToString(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  return String(value);
}
```

对 unknown 类型使用类型断言

```ts
const value: unknown = "Hello World";
const foo: string = value; // Error
const bar: string = value as string; // OK
```

## JavaScript中的错误有哪几种类型？

JavaScript中的错误类型

Error
EvalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError

Error
Error是最基本的错误类型，其他的错误类型都继承自该类型。因此，所有错误的类型共享了一组相同的属性。 这个类型的错误很少见。一般使用开发人员自定义抛出的错误。

EvalError
这个错误会在使用eval()函数发生异常时候抛出。两种情况会出错：

new eval();
eval = foo;
上面两个的意思结合就是没有直接调用eval函数，而是new或者是重新赋值 这个错误基本上不会遇到，因为eval函数本来用的就不多。不过需要注意的是，eval是一个关键字。

RangeError
这个错误会在数值超出相应范围时触发。比如使用new Array()的时候传递一个负数或者是超过数组最大长度（4,294,967,295）的数，比如Number.MAX_VALUE，Number.MIN_VALUE。注意递归爆炸也有这个错误。

ReferenceError
这个错误一般就是出现在变量找不到的情况，比如：

var a = b;
Uncaught ReferenceError: b is not defined
这时候就需要检查一下一个变量了

SyntaxError
当Javascript语言解析代码时,Javascript引擎发现了不符合语法规范的tokens或token顺序时抛出SyntaxError。

TypeError
这个错误在JavaScript中是经常遇到的，不管是初学者还是老手。在变量中保存着以外的类型时，或者在访问不存在的方法时。都会导致这种错误。但是归根结底还是由于在执行特定于类型的操作时，变量的类型并不符合要求所致。比如：

var o = new 10;
a.style.widht = "10px";
关于设置样式这个东西，新手会遇到很多，一般这都是由获取不到元素导致的。

URIError
在使用encodeURI或者decodeURI因为URL格式不正确时，就会导致URIError错误。这种错误也很少见。

## 说说你对git reset 和 git revert 的理解？区别？

git reset
reset用于回退版本，可以遗弃不再使用的提交

执行遗弃时，需要根据影响的范围而指定不同的参数，可以指定是否复原索引或工作树内容

git revert
在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化，不会改变过去的历史，主要是用于安全地取消过去发布的提交

git revert
跟git reset用法基本一致，git revert 撤销某次操作，此次操作之前和之后的 commit和history都会保留，并且把这次撤销，作为一次最新的提交，如下：

git revert <commit_id> 
如果撤销前一个版本，可以通过如下命令：

git revert HEAD
撤销前前一次，如下：

git revert HEAD^
三、区别
撤销（revert）被设计为撤销公开的提交（比如已经push）的安全方式，git reset被设计为重设本地更改

因为两个命令的目的不同，它们的实现也不一样：重设完全地移除了一堆更改，而撤销保留了原来的更改，用一个新的提交来实现撤销

两者主要区别如下：

git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit
git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容
在回滚这一操作上看，效果差不多。但是在日后继续 merge 以前的老版本时有区别
git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，之前提交合并的代码仍然存在，导致不能够重新合并

但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入

如果回退分支的代码以后还需要的情况则使用git revert， 如果分支是提错了没用的并且不想让别人发现这些错误代码，则使用git reset

## 说说你对git rebase 和 git merge的理解？以及它们的区别？

merge
通过merge合并分支会新增一个merge commit，然后将两个分支的历史联系起来

其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂

rebase
rebase 会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交

主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 git merge所需的不必要的合并提交

## 说说对git pull 和 git fetch 的理解？有什么区别？

相同点：

在作用上他们的功能是大致相同的，都是起到了更新代码的作用
不同点：

git pull是相当于从远程仓库获取最新版本，然后再与本地分支merge，即git pull = git fetch + git merge
相比起来，git fetch 更安全也更符合实际要求，在 merge 前，我们可以查看更新情况，根据实际情况再决定是否合并


## 什么是“事件代理”

事件代理（Event Delegation）也称之为事件委托。是JavaScript中常用绑定事件的常用技巧。

顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件委托给父元素，让父元素担当事件监听的职务。

事件代理的原理是DOM元素的事件冒泡。

一个事件触发后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

捕获阶段：从window对象传导到目标节点（上层传到底层）称为“捕获阶段”（capture phase），捕获阶段不会响应任何事件；
目标阶段：在目标节点上触发，称为“目标阶段”
冒泡阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层。

事件委托的优点：
可以大量节省内存占用，减少事件注册。
比如在ul上代理所有li的click事件就非常棒

## Promise.all 和 Promise.allSettled 有什么区别？

一句话概括Promise.allSettled和Promise.all的最大不同：Promise.allSettled永远不会被reject。

Promise.all的痛点
当需要处理多个Promise并行时，大多数情况下Promise.all用起来是非常顺手的，比如下面这样

const delay = n => new Promise(resolve => setTimeout(resolve, n));

const promises = [
  delay(100).then(() => 1),
  delay(200).then(() => 2),
  ]

Promise.all(promises).then(values=>console.log(values))
// 最终输出： [1, 2]
可是，是一旦有一个promise出现了异常，被reject了，情况就会变的麻烦。

const promises = [
  delay(100).then(() => 1),
  delay(200).then(() => 2),
  Promise.reject(3)
  ]

Promise.all(promises).then(values=>console.log(values))
// 最终输出： Uncaught (in promise) 3

Promise.all(promises)
.then(values=>console.log(values))
.catch(err=>console.log(err))
// 加入catch语句后，最终输出：3
尽管能用catch捕获其中的异常，但你会发现其他执行成功的Promise的消息都丢失了，仿佛石沉大海一般。

要么全部成功，要么全部重来，这是Promise.all本身的强硬逻辑，也是痛点的来源，不能说它错，但这的确给Promise.allSettled留下了立足的空间。

Promise.allSettled
假如使用Promise.allSettled来处理这段逻辑会怎样呢?

const promises = [
  delay(100).then(() => 1),
  delay(200).then(() => 2),
  Promise.reject(3)
  ]

Promise.allSettled(promises).then(values=>console.log(values))
// 最终输出： 
//    [
//      {status: "fulfilled", value: 1},
//      {status: "fulfilled", value: 2},
//      {status: "rejected", value: 3},
//    ]
可以看到所有promise的数据都被包含在then语句中，且每个promise的返回值多了一个status字段，表示当前promise的状态，没有任何一个promise的信息被丢失。

因此，当用Promise.allSettled时，我们只需专注在then语句里，当有promise被异常打断时，我们依然能妥善处理那些已经成功了的promise，不必全部重来。

## JS中怎么阻止事件冒泡和默认事件？

event.stopPropagation()方法
这是阻止事件的冒泡方法，不让事件向 document 上蔓延，但是默认事件任然会执行，当你掉用这个方法的时候，如果点击一个连接，这个连接仍然会被打开，

event.preventDefault()方法
这是阻止默认事件的方法，比如在a标签的绑定事件上调用此方法，链接则不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素；

return false
这个方法比较暴力，他会同事阻止事件冒泡也会阻止默认事件；写上此代码，连接不会被打开，事件也不会传递到上一层的父元素；可以理解为return false就等于同时调用了event.stopPropagation()和event.preventDefault()

## 谈谈你对事件冒泡和捕获的理解

事件冒泡和事件捕获分别由微软和网景公司提出，这两个概念都是为了解决页面中事件流（事件发生顺序）的问题。

<div id="outer">
    <p id="inner">Click me!</p>
</div>
上面的代码当中一个div元素当中有一个p子元素，如果两个元素都有一个click的处理函数，那么我们怎么才能知道哪一个函数会首先被触发呢？

事件冒泡
微软提出了名为事件冒泡(event bubbling)的事件流。事件冒泡可以形象地比喻为把一颗石头投入水中，泡泡会一直从水底冒出水面。也就是说，事件会从最内层的元素开始发生，一直向上传播，直到document对象。

因此在事件冒泡的概念下在p元素上发生click事件的顺序应该是p -> div -> body -> html -> document

事件捕获
网景提出另一种事件流名为事件捕获(event capturing)。与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。

因此在事件捕获的概念下在p元素上发生click事件的顺序应该是document -> html -> body -> div -> p

addEventListener的第三个参数
网景 和 微软 曾经的战争还是比较火热的，当时， 网景主张捕获方式，微软主张冒泡方式。后来 w3c 采用折中的方式，平息了战火，制定了统一的标准——先捕获再冒泡。

addEventListener的第三个参数就是为冒泡和捕获准备的。

addEventListener有三个参数：

element.addEventListener(event, function, useCapture)
第一个参数是需要绑定的事件
第二个参数是触发事件后要执行的函数
第三个参数默认值是false，表示在事件冒泡阶段调用事件处理函数;如果参数为true，则表示在事件捕获阶段调用处理函数。

## js中如何判断一个值是否是数组类型？

instanceof
const arr= [];
arr instanceof Array; // true
Array.isArray
const arr = []
Array.isArray(arr) // true

const obj = {}
Array.isArray(obj) // false
Object.prototype.isPrototypeOf
使用Object的原型方法isPrototypeOf，判断两个对象的原型是否一样, isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。

const arr = [];
Object.prototype.isPrototypeOf(arr, Array.prototype); // true
Object.getPrototypeOf
Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。

const arr = []
Object.getPrototypeOf(arr) === Array.prototype // true
Object.prototype.toString
借用Object原型的call或者apply方法，调用toString()是否为[object Array]

const arr = []
Object.prototype.toString.call(arr) === '[object Array]' // true

const obj = {}
Object.prototype.toString.call(obj) // "[object Object]"


## IconFont 的原理是什么

IconFont 的使用原理来自于 css 的 @font-face 属性。

这个属性用来定义一个新的字体，基本用法如下：
```css
@font-face {
  font-family: <YourFontName>;
  src: <url> [<format>],[<source> [<format>]], *;
  [font-weight: <weight>];
  [font-style: <style>];
}

```
font-family：为载入的字体取名字。
src：[url]加载字体，可以是相对路径，可以是绝对路径，也可以是网络地址。[format]定义的字体的格式，用来帮助浏览器识别。主要取值为：【truetype(.ttf)、opentype（.otf）、truetype-aat、embedded-opentype(.eot)、svg(.svg)、woff(.woff)】。
font-weight：定义加粗样式。
font-style：定义字体样式。

## iconfont是什么？有什么优缺点？

什么是 IconFont
顾名思义，IconFont 就是字体图标。严格地说，就是一种字体，但是，它们不包含字母或数字，而是包含符号和字形。您可以使用 CSS 设置样式，就像设置常规文本一样，这使得 IconFont 成为 Web 开发时图标的热门选择。

优点
可以方便地将任何 CSS 效果应用于它们。
因为它们是矢量图形，所以它们是可伸缩的。这意味着我们可以在不降低质量的情况下伸缩它们。
我们只需要发送一个或少量 HTTP 请求来加载它们，而不是像图片，可能需要多个 HTTP 请求。
由于尺寸小，它们加载速度快。
它们在所有浏览器中都得到支持（甚至支持到 IE6）。
不足
不能用来显示复杂图像
通常只限于一种颜色，除非应用一些 CSS 技巧
字体图标通常是根据特定的网格设计的，例如 16x16, 32×32, 48×48等。如果由于某种原因将网格系统改为25×25，可能不会得到清晰的结果

## 123['toString'].length + 123 的输出值是多少

function的length
function fn1 (name) {}

function fn2 (name = '林三心') {}

function fn3 (name, age = 22) {}

function fn4 (name, age = 22, gender) {}

function fn5(name = '林三心', age, gender) { }

console.log(fn1.length) // 1
console.log(fn2.length) // 0
console.log(fn3.length) // 1
console.log(fn4.length) // 1
console.log(fn5.length) // 0
function的length，就是第一个具有默认值之前的参数个数。

在函数的形参中，还有剩余参数这个东西，那如果具有剩余参数，会是怎么算呢？

function fn1(name, ...args) {}

console.log(fn1.length) // 1
可以看出，剩余参数是不算进length的计算之中的。

所以，123['toString'].length + 123 = ?的答案是124

总结
length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数
