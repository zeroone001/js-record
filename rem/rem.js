/* 
    100 是比例，750是设计稿尺寸
    最后的rem, $n 是设计稿尺寸
    @function rem ($n) {
        @return $n/100 * 1rem;
    }
*/
(function (w) {
    var d = document.documentElement;
    var fun = function () {
        var w = d.clientWidth > 750 ? 750 : d.clientWidth;
        d.style.fontSize = w/750 * 100 + 'px';
    }
    w.addEventListener('resize', fun);
    fun();
})(window);