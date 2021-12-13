### 记录常用知识

> 作为笔记使用


### 注册事件监听器

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

## **使用 sort 方法按字母顺序给数组排序**

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

## **使用 split 方法将字符串拆分成数组**

```js
// 把单词拆分出来
function splitify(str) {
  // 只修改这一行下面的代码
  return str.split(/[^a-zA-Z]/);
  // 只修改这一行上面的代码
}

splitify("Hello World,I-am code");
```

## **使用 some 方法检查数组中是否有元素是否符合条件**

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

## **函数柯里化和局部调用**

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

