##### 需要安装的依赖

* `@babel/core`, `@babel/cli`, 
* 预设： `@babel/preset-env` 
* `@babel/plugin-transform-runtime` `@babel/runtime-corejs3`
* `babel-loader`,`babel-eslint`
* 一篇非常全面的配置教程
* 前提是babel7.4以上


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

3. corejs3 

[corejs3 的更新](https://segmentfault.com/a/1190000020237817)
这篇文章讲的特别好，两种配置方案

4. polyfill 还是 transform-runtime

[polyfill 还是 transform-runtime](https://segmentfault.com/a/1190000020237790)

5. [babel中的runtime-corejs和plugin-transform-runtime](https://jsweibo.github.io/2019/08/10/babel%E4%B8%AD%E7%9A%84runtime-corejs%E5%92%8Cplugin-transform-runtime/)
