1. Object.prototype.valueOf()
   ```javascript
   
   valueOf() //返回该对象的原始值， 感觉在实际中没啥用
   toString() 
   var a = {};
   a.toString() // "[object Object]"
   a.valueOf() == a
   var b = ['1','2'];
   b.toString() // '1,2'
   b.valueOf() == b
   ```
2. 相等操作符 ==
   * 如果有一个操作数是布尔值，先把他转化为数值，false为0，true为1；
   * 如果一个操作数是字符串，一个是数字，先把字符串转为数值，再比较；
   * 如果一个是对象，另一个不是，则调用对象的valueOf(),返回原始值，如果不是原始值的话，再调用toString()，再把字符串转为数值，进行比较；
3. null == undefined   