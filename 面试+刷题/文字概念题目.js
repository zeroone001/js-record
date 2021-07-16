// 1. 谈谈对 MVC、MVP、MVVM 模式的理解?

// http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html

/*
    MVC : Model, View, Controller
    MVP: Model -> <- Presenter -> <- View
    MVVM: Model -> <- ViewMode -> <- View 双向绑定

*/

// 2. （腾讯）webpack 中 loader 和 plugin 的区别是什么？

/*
    loader: laoder 是一个转化器，单纯的把A文件编译为B文件，属于单纯的文件转换过程
    plugin: plugin 是一个扩展器，它丰富了webpack本身，针对的是loader结束之后，webpack打包的过程中，他并不直接
    操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务


*/

// 3. （阿里巴巴）简述懒加载

/*
    懒加载也叫延迟加载，指的是在长网页中，延迟加载图像，是一种很好的优化网页性能的方式

    优点: 
        1. 提升用户的体验，加快首屏的加载速度
        2. 减少无效资源的记载
        3. 防止并发加载的资源过多，会阻塞JS的加载

    原理： 
        首先将页面上的图片的 src 属性设为空字符串，而图片的真实路径则设置在 data-original 属性中，当页面滚动的时候需要去监听 scroll 事件，在 scroll 事件的回调中，判断我们的懒加载的图片是否进入可视区域，如果图片在可视区内则将图片的 src 属性设置为 data-original 的值，这样就可以实现延迟加载。

*/

// 4. 扩展运算符与rest参数

/*

    rest 参数：
    demo : 
    function test (a,b, ...the_array) {

    }
    如果函数的最后一个参数，以...作为前缀，那么他就是一个以【剩余参数】组成的真数组

    rest参数与arguments的区别：
    1. rest数组里面，只包含那些没有对应形参的实参，而arguments包含了传给函数的所有实参
    2. arguments 不是一个真正的数组，但是rest是一个真正的Array实例

    arguments 转化为真正的数组： var arr = Array.prototype.slice.call(arguments);

    扩展运算符

    1. 可以把数组在语法层面展开
    var arr1 = [1,2,3];
    var arr2 = [4,5,6];
    arr2.push(...arr1);
    2. 可以把字符串在语法层面展开
    var str = 'skylys';
    var arr = [];
    arr.push(...str); // ["s","k","y","l","y","s"]
    3. 在构造字面量对象的时候，将对象表达式按照key-value 的形式展开, 用于克隆或者属性拷贝
    var a = {a: 1,b: function(){console.log(1)}}
    var cc = {...a};
    a === cc // false




*/