> [Link](https://mp.weixin.qq.com/s/uRMYrxaduPaMkc97Upjkqg)

缺点兼容性不好，IE不支持
```javascript
var intersectionObserver = new IntersectionObserver(function(entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log('Loaded new items');
});
// start observing
intersectionObserver.observe(document.querySelector('.scrollerFooter'));
```