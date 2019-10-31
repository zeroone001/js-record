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
