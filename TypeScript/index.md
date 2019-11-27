##### TS 学习记录

1. what

主要提供了类型系统和对ES6的支持

2. install

`npm install -g typescript`

3. 原始数据类型

JS 分为原始数据类型和对象类型

null 和 undefined 是所有原始类型的子类型

4. 任意值

一个普通类型，在赋值过程中随意改变是不允许的
如果是any 类型，则是可以的

5. 类型推论

如果定义的时候没有赋值，那么根据类型推论，推断出any类型；如果赋值了，那么就会根据那个值进行推断；
```js
let name1; // any类型
name1 = 'lys';

let name2 = 'lyss'; // 推断出 string类型
```

6. 联合类型

```js
// 1
let myNumber: number | string;
myNumber = 5;
// 2
function getNumer (num: number | string): number {
    return 'this is your' + num;
}
```

