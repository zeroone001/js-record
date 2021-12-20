###### 注意

* (一) 当前端配置withCredentials=true时, 后端配置Access-Control-Allow-Origin不能为*, 必须是相应地址
* (二) 当配置withCredentials=true时, 后端需配置Access-Control-Allow-Credentials
* (三) 当前端配置请求头时, 后端需要配置Access-Control-Allow-Headers为对应的请求头集合

#### POST 默认编码方式是 application/json

后端需要`Content-Type: application/x-www-form-urlencoded`
下面是解决方案

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```
or

```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```