#### rem配置
```js
(function (w) {
    var d = document.documentElement;
    var fun = function () {
        var w = d.clientWidth > 750 ? 750 : d.clientWidth;
        d.style.fontSize = w/750 * 100 + 'px';
    }
    w.addEventListener('resize', fun);
    fun();
})(window);

@function rem($num) {
    @return $num / 100 * 1rem;
}
```

#### rem一些事情

> [rem](https://seminelee.github.io/2017/09/03/rem/)

#### orientationchange事件在设备的纵横方向改变时触发。

[orientationchange](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/orientationchange_event)

#### rem 存在的问题

rem 设置字号的时候
[rem 存在的问题](https://imweb.io/topic/5745adf5a94f742c1db63485)
