#### 浏览器复制粘贴
> https://segmentfault.com/a/1190000007616673
```js
// 一，动态添加input的方法
function copy (id) {
    var t = document.createElement('input');
    t.setAttribute('value', document.getElementById(id).innerHTML);
    document.body.appendChild(t);
    t.select();
    var content = window.getSelection().toString();
    document.execCommand('copy');
    document.body.removeChild(t);
}
// 方法二 https://github.com/zenorocha/clipboard.js
// 使用第三方库
// 三，
var copyDOM = document.querySelector('#selector');  
  var range = document.createRange();  
  // 选中需要复制的节点
  range.selectNode(copyDOM);
  // 执行选中元素
  window.getSelection().addRange(range);
  // 执行 copy 操作
var successful = document.execCommand('copy');  
  try {  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('copy is' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
// 移除选中的元素
  window.getSelection().removeAllRanges();  
```
#### 倒计时
```js
countDown () {
    this.timeCount = parseInt((this.timestamp * 1000 - new Date().getTime()) / 1000);
    const ts = setInterval(() => {
        if (this.timeCount === 0) {
            clearInterval(ts);
        }
        this.timeCount--;
    }, 1000);
},
watch: {
    timeCount (newVal) {
        if (newVal) {
            const seconds = newVal % 60;
            this.seconds = seconds < 10 ? '0' + seconds : seconds;
            const minute = parseInt(newVal / 60 % 60);
            this.minute = minute < 10 ? '0' + minute : minute;
            const hours = parseInt(newVal / 3600 % 24);
            this.hours = hours < 10 ? '0' + hours : hours;
        }
    }
},
```
#### getQuery
```js
// new URL 兼容性问题：IE不支持
try {
  var url = new URL(location.href); 
  var pageId = url.searchParams.get("pageId"); // 33985973
} catch (e) {

}
```
#### 倒计时

```js
methods: {
  countDownFun () {
        if (this.countTime) {
            clearInterval(this.countTime);
        }
        this.countTime = setInterval(() => {
            let s = this.totalS % 60;
            let m = parseInt(this.totalS % 3600 / 60);
            let h = parseInt(this.totalS / 3600);
            this.countH = this.timeFilter(h);
            this.countM = this.timeFilter(m);
            this.countS = this.timeFilter(s);
            if (this.totalS === 0) {
                clearInterval(this.countTime);
                this.isShow = false;
                return false;
            } else {
                this.totalS -= 1;
            }
        }, 1000);
    },
    timeFilter (time) {
        if (time < 10) {
            return '0' + String(time);
        } else {
            return time;
        }
    }
}
```


