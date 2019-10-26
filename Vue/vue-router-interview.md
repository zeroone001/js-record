##### 收集vue-router面试题

1. router 有哪些组件？

```html
<router-link>
<router-view>
<keep-alive>
```
2. 怎么定义vue-router的动态路由？怎么获取传过来的值？
```javascript
{
    path: '/page/:id',
    name: 'details',
    component: detail
}
console.log(this.$route.params.id)
```

3. vue-router有哪几种导航钩子？
```javascript
const router = new VueRouter({
    mode: 'hash',
    routes: [{
        {
            path: '/page/:id',
            name: 'details',
            component: detail
        }
    }]
})
router.beforeEach((to, from, next) => {

});
router.afterEach((to, from) => {
    
});
```
4. $route和 $router的区别是什么？

    * router为VueRouter的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。
   * route 是路由信息对象||跳转的路由对象，每一个路由都会有一个route对象，是一个局部对象，包含path,params,hash,query,fullPath,matched,name等路由信息参数。

5. vue-router 传参
   * params 
    ```javascript
    this.$router.push({
        path: '/page',
        params: {
            number:1,
            page: 1
        }
    })
    ```
   * query
    ```javascript
    this.$router.push({
        path: '/page',
        query: {
            number:1,
            page: 1
        }
    })
    ```

6. vue-router的两种模式
   * hash 原理是onhashchage事件，可以在window对象上监听这个事件
   * history 利用了HTML5 History Interface 中新增的pushState()和replaceState()方法。
7. vue-router的原理
```javascript
window.addEventListener('hashchange', function() {

});
```