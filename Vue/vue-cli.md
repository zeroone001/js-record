##### 记录一下配置的一些东西

> [CLI 官网](https://cli.vuejs.org/zh/guide/prototyping.html)
> [Github 配置文档](https://github.com/vuejs/vue-cli/tree/dev/docs/config)
> 
1. 配置文件在 vue.config.js 里面

```js
module.exports = {
    // 这是build的时候，生成路径
    publicPath: process.env.NODE_ENV === 'production' ? 'https://res.smzdm.com/admin_edm/dist/' : '/', 
    devServer: {
        host: '::'
    }
};
```
