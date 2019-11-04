> [运行机制](https://mp.weixin.qq.com/s/cOMlH-z5noHrg6Upg6zyNw)

###### 术语

* 立即执行栈
* 任务队列
* 宏任务
* 微任务
* task有优先级，优先执行微任务，之后再执行宏任务
* 

```javascript
ajax({
    url:www.Nealyang.com,
    data:prams,
    success:() => {
        console.log('请求成功!');
    },
    error:()=>{
        console.log('请求失败~');
    }
})
console.log('这是一个同步任务');
```
1. ajax 请求首先进入event table，分别注册了回调函数
2. 主线程执行同步任务：console.log('这是一个同步任务');
3. 主线程任务执行完毕，看Event Queue是否有待执行的 task,这里是不断地检查，只要主线程的task queue没有任务执行了，主线程就一直在这等着
4. ajax 执行完毕，将回调函数push 到Event Queue。（步骤 3、4 没有先后顺序而言）
5. 主线程“终于”等到了Event Queue里有 task可以执行了，执行对应的回调任务。
6. 如此往复。

为什么说上述不严谨我却还是强调所有的同步任务都是 MacroTask 呢，因为我们仅仅需要记住几个 MicroTask 即可，排除法！别的都是 MacroTask。MicroTask 包括：Process.nextTick、Promise.then catch finally(注意我不是说 Promise)、MutationObserver。
