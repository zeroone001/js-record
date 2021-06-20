#### eslint 学习记录

[掘金](https://juejin.im/post/5d3d3a685188257206519148)
[掘金](https://juejin.im/post/5ce3dbd1e51d454f72302461)
[官网](https://cn.eslint.org/docs/user-guide/configuring)


1. 环境与全局变量

`env` `globals`
```
{
	"globals": {
		"var1": "writeable",
		"var2": "readonly"
	}
}
```

2. 解析器配置
   
// If you want to use custom parsers such as babel-eslint or @typescript-eslint/parser, you have to use parserOptions.parser option instead of parser option.

`parse` `parseOptions`


3. rules

> [官方rules](https://cn.eslint.org/docs/rules/)

4. extends

```
{
	"extends": [
		"plugin:vue/recommended",
		"plugin:@typescript-eslint/recommended",
		"standard"
	]
}
```
5. webpack

```js
devServer: {
    overlay: true // 如果代码不符合规范，就会在浏览器上面加上一个蒙层
}
use: [
    {
        loader: 'babel-loader'
    },
    {
        loader: 'eslint-loader',
        options: {
            fix: true // 一些小问题会自动修复
        },
        force: 'pre' // loader顺序不能错
    }
]
```

加入用happypack， 配置如下

```js
var HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
use: [
    {
        test: /\.(vue|js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'happypack/loader?id=jseslint'
    }

],
plugins: [
    new HappyPack({
        id: 'jseslint',
        loaders: [
            'eslint-loader?cacheDirectory=true'
        ],
        threadPool: happyThreadPool,
        verbose: true
    })
]
```
6. plugins

```
{
	"plugins": [
		"vue"
	]
}
```

7. 单独配置一组文件的规则

```js
{
	"overrides": {
		"files": ["*.a.js"],
		"rules": {
			"no-unused-expressions": "off"
		}
	}
}
```

#### 命令行修复

```js
npx eslint --fix "src/..."
```