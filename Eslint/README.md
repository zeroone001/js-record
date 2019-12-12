###### eslint 学习记录

[https://juejin.im/post/5d3d3a685188257206519148](https://juejin.im/post/5d3d3a685188257206519148)
[https://juejin.im/post/5ce3dbd1e51d454f72302461](https://juejin.im/post/5ce3dbd1e51d454f72302461)

1. 环境与全局变量

`env` `globals`

2. 解析器配置

`parse` `parseOptions`

3. rules

4. extends

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

