
let domImg = document.querySelectorAll('.img-class');
let domImgArr = Array.prototype.slice.call(domImg);
let len = domImgArr.length;
function lazyLoad () {
    let screenHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;

    domImgArr.forEach(function (ele, index) {
        // offsetTop 是相对于父元素的，下面的一个会更好一些
        var domTop = ele.getBoundingClientRect().top;
        if (domTop < screenHeight + scrollTop) {
            if (ele.getAttribute('src') === 'default.jpg') {
                var _src = ele.getAttribute('data-src');
                ele.src = _src;
            }
        }
    });
}
window.addEventListener('scroll', function () {
    lazyLoad();
});
// 函数节流来进行优化
function throttle () {
    
}