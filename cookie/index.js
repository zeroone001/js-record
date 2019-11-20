/*
    封装一个对cookie操作的方法
*/

// getCookie 两种方法，一种正则，一种for循环
function getCookie (name) {
    var cookieArr = document.cookie.split('; ');
    var len = cookieArr.length;

    for (let i = 0; i < len; i++) {
        let item = cookieArr[i].split('=');
        if (name === item[0]) {
            return decodeURIComponent(item[1]);
        }
    }
    return '';
}
function getCookie2 (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return decodeURIComponent(arr[2]);
    } else {
        return '';
    }
}

function setCookie (name, value, others) {
    var defaults = {
        seconds: 604800,
        path: '/',
        domain: location.hostname,//修复 ie domain 设置为空时静默失败的 bug
        secure: false
    };
    var props = ['expires', 'path', 'domain', 'secure'];

    var datas = this.extend(defaults, others, false);
    var cookieVal = '';
    var prop, propVal;
    datas.expires = new Date(new Date().getTime() + datas.seconds * 1000).toUTCString();
    cookieVal += encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for(var i = 0, len = props.length; i < len; i++){
        prop = props[i];
        propVal = datas[prop];

        if((typeof propVal) != 'undefined'){
            if(prop == 'secure'){
                cookieVal += propVal ? ('; ' + prop) : '';
            }else{
                cookieVal += '; ' + prop + '=' + propVal;
            }
        }
    }
    document.cookie = cookieVal;
}
