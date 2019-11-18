1. 不刷新页面的情况下，改变URL
   ```javascript
   let data = {};
   let title = '我是title';
   let newURL = 'https://github.com/Advanced-Frontend/Daily-Interview-Question/issues?as=aaa';
   window.history.pushState(data, title, newURL)
   ```
2. 监听浏览器后退操作

```javascript
function pushState () {
    let state = {
        title: 'title',
        url: '#'
    };
    window.history.pushState(state, 'title', '#');
}
pushState();
window.addEventListener('popstate', function () {
    // 监听到了返回按钮的点击
    // 这里写自己的操作
    
    history.go(-1); // 之后执行返回
});
```
3. history.pushState()

[简单聊聊H5的pushState与replaceState](https://juejin.im/post/5a7332b25188257a6d634f8d)
```javascript
history.pushState();
history.replaceState(); // 淘宝使用的这个，不会刷新页面
```
