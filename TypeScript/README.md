##### TS 学习记录
> [入门教程](https://ts.xcatliu.com/)


1. what

主要提供了类型系统和对ES6的支持

2. install

`npm install -g typescript`
`npm --registry https://registry.npm.taobao.org install -g typescript`

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
7. 对象类型-接口
```js
// 赋值的时候变量的形状必须跟接口一致
interface Person {
    name: string;
    age?: number;
}
let a: Person = {
    name: 'lys',
    age: 4
};
```
8. 数组的类型

```js
// 类型+方括号
let arr: number[] = [1,12];
// 数组泛型
let arr: Array<number> = [1, 2];
// any
let arr: any[] = [1, 3];

function sun () {
    let args: IArguments = arguments;
}
```
9. 函数的类型

```js
// 输入多余的或者少于的参数都是不允许的
function sum (x: number, y: number): number {
    return x + y;
}
// 可选参数， 可选参数后面不允许再有参数了
function sum (x: number, y?: number): number {
    return x + y;
}
// 参数默认值
function sum (x: number, y:number = 123): number {
    return x + y;
}
sum(123);
```
10. 类型断言
语法： <类型>值 或者 值 as 类型

```js
// 将一个联合类型的值，指定为一个更加具体的类型
function sum (x: number | string): number {
    if (<string>x.length) {
        return x.length;
    } else {
        return x.toString().length;
    }
}
```
11. 内置对象

```js
let r: RegExp = /[a-z]/;

let body: HTMLElement = document.body;
let s: NodeList = document.querySelectorAll('div');

```

	
wget https://raw.githubusercontent.com/flyzy2005/ss-fly/master/v2ray.sh && chmod +x v2ray.sh && ./v2ray.sh
