##### vue-router使用

> vue-router 现在是@3.x版本

* 创建单页应用


##### feature

* this.$route 访问当前路由
* this.$router 访问路由器

##### 两种跳转方式

* `<router-link to="/page"></router-link>`
* this.$router.push('/page')  
* this.$router.go(-1)
  
##### base
* 编程式导航：this.$router.push({path: '/page', query: {name: 'lys'}})
* './page?name=lys'
* 重定向
* hash & history

```javascript
// app.vue 最顶层
<template>
<router-view />
</template>

// main.js
import router from './router.js'
new Vue({
    el: '#app',
    router
})

// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import page from '/page.vue';

Vue.use(VueRouter);

const route = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        component: page
    }, { // 动态路由匹配
        path: '/page/:id',
        component: user,
        name: 'user'
    }, {
        path: '/a',
        redirect: '/b',
        component: guide
    }]
});

route.beforeEach((to, form, next) => {

});
route.afterEach((to, from) => {

})
export default route;

// page.vue
<template>
<div>{{page}}<div>
</template>
<script>
export default {
    data () {
        return {
            page: 'hello'
        }
    },
    mounted () {
        console.log(this.$route.params.id)
    }
}
</script>
```