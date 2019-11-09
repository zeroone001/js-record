
> from [JS正则表达式完整教程](https://juejin.im/post/5965943ff265da6c30653879#comment)


1. getURLQuery 获取URL参数

```javascript
let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
```

2. new RegExp(pattern, flags) 

有两种方法来创建一个RegExp对象：一是字面量、二是构造函数

3. 字符集合

一个字符集合，也叫字符组。匹配集合中的任意一个字符。你可以使用连字符'-'指定一个范围。例如，[abcd] 等价于 [a-d]，匹配"brisket"中的'b'和"chop"中的'c'。

一个反义或补充字符集，也叫反义字符组。也就是说，它匹配任意不在括号内的字符。你也可以通过使用连字符 '-' 指定一个范围内的字符。例如，[^abc] 等价于 [^a-c]。 第一个匹配的是 "bacon" 中的'o' 和 "chop" 中的 'h'。

4. 分组（Grouping）

(x) 匹配 x 并且捕获匹配项。 这被称为捕获括号（capturing parentheses）

5. 数量词

x* 匹配前面的模式 x 0 或多次。
x+ 匹配前面的模式 x 1 或多次。等价于 {1,}。




