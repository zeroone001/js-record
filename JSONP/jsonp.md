[https://juejin.im/post/5db66672f265da4d0e009aad?utm_source=gold_browser_extension](https://juejin.im/post/5db66672f265da4d0e009aad?utm_source=gold_browser_extension)
1. 后端处理
```javascript
header(“Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept”);
header(“Access-Control-Allow-Credentials: true”);
header(“Access-Control-Allow-Origin: *”);
```
2. JSONP 跨域
```javascript
    // 手写原生JSONP
  const script = document.createElement('script');
  const body = docuemnt.body;
  script.src = 'http:127.0.0.1/api/?callback=callbackJsonp';
  body.appendChild(script);

  function callbackJsonp (res) {
      console.log('获取到的数据', res);
      body.removeChild(script);
  }
```
3. document.domain + iframe 跨域
   > 这种跨域方式要求主域名相同。比如www.peanut.site、blog.peanut.site、 a.peanutyu.site这三者主域名都是peanutyu.site。主域名不同就不能使用这种跨域方式。
4. 跨域资源共享CORS
   > CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。
   

   