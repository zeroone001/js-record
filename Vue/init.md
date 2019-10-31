1. 创建Vue的几种方式
   ```javascript
    import Vue from 'vue';
    import App from './App.vue';

    // 1
    let Main = Vue.component('App', App);
    new Main({
        el: '#app'
    })

    // 2 
    new Vue({
        el: '#app',
        components: {
            App
        },
        template: '<App/>'
    })

    // 3 render 函数
    new Vue({
        el: '#app',
        components: { App },
        render (h) => h('App')
    })
   ```

   