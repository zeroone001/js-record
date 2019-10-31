1. 不刷新页面的情况下，改变URL
   ```javascript
   let data = {};
   let title = '我是title';
   let newURL = 'https://github.com/Advanced-Frontend/Daily-Interview-Question/issues?as=aaa';
   window.history.pushState(data, title, newURL)
   ```
