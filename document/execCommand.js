// 复制文字到剪贴板
function copy (text, callback) {
    if (document.execCommand('Copy')) {
        var input = document.createElement('input');
        input.setAttribute('id', 'input');
        input.value = text;
        document.body.appendChild(input);
        document.getElementById('input').select();
        document.execCommand('Copy');
        document.body.removeChild(input);
        callback(1)
    } else {
        callback(2)
    }
}
