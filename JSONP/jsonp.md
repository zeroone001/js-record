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
   