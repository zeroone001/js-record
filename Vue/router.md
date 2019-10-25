##### vue-router使用

> vue-router 现在是@3.x版本

* 创建单页应用


##### feature

* this.$route 访问当前路由
* this.$router 访问路由器
* <router-link>

##### 两种跳转方式

* <router-link to="/page"></router-link>
* this.$router.push('/page')

```javascript

// main.js
import router from './router.js'
new Vue({
    el: '#app',
    router
})

// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import page from '/page.vue'
const route = new VueRouter({
    routes: [{
        path: '/page',
        component: page
    }]
});
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
        console.log(this.$route.params)
    }
}
</script>
```