###### 剪贴板交互

[MDN](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)

```javascript
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("Copy");
}

document.querySelector("#copy").addEventListener("click", copy);

function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);

// clipboard API
navigator.permissions.query({name: "clipboard-write"}).then(result => {
  if (result.state == "granted" || result.state == "prompt") {
    /* write to the clipboard now */
  }
});
// 写入剪贴板
navigator.clipboard.writeText('dasdas').then(function() {

});
// 读取剪贴板
navigator.clipboard.readText().then(function(){

});
```

