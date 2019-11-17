(function (w) {
    var d = document.documentElement;
    var fun = function () {
        var w = d.clientWidth > 750 ? 750 : d.clientWidth;
        d.style.fontSize = w/750 * 100 + 'px';
    }
    w.addEventListener('resize', fun);
    fun();
})(window);