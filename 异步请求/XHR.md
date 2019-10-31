1. XMLHTttpRequest

```javascript
let xhr = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
}

xhr.open('GET', url, true);
xhr.send(data);
xhr.onreadystatechange = function () {
    try {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {

            }
        }
    } catch (e) {

    }
}

// JQuery ajax 也是基于XMLHttpRequest封装的
/*  
    缺点：
    1. 回掉地狱
    2. 只用ajax，而引入JQ不合理

*/

```
2. axios

> 是一个基于Promise的http库，也是对XMLHttpRequest的封装

3. fetch
   
    [fetch](https://github.com/github/fetch)
   Fetch API提供了一个 JavaScript 接口，用于访问和操作HTTP管道的部分，例如请求和响应。它还提供了一个全局fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。fetch是低层次的API，代替XHR，可以轻松处理各种格式，非文本化格式。可以很容易的被其他技术使用，例如Service Workers。但是想要很好的使用fetch，需要做一些封装处理。

   ```javascript
    fetch(url, {
        mode: 'cors',
        body: JSON.stringify(data),
        method: 'POST',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }).then(response => response.json()).then((res) => {
        console.log(res); //json
    })
   ```
