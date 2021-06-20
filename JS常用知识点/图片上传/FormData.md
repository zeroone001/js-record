```js
var formData = new FormData();
formData.append(name, value);
formData.append(name, value, filename);
// filename 传给服务器的文件名称 (一个 USVString), 当一个 Blob 或 File 被作为第二个参数的时候， Blob 对象的默认文件名是 "blob"。 File 对象的默认文件名是该文件的名称。
```
