##### 需要安装的依赖

* `@babel/core`, `@babel/cli`, 

1. plugin

这个插件是解决深层嵌套问题
```js
const obj = {
    a: {
        b: {
            c: 312
        }
    }
}
obj?.a?.b?.c
```
```s
npm install --save-dev @babel/plugin-proposal-optional-chaining
{
    "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```
2. browserslist 

> [测试网站](https://browserl.ist/)



