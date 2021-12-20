let xhr = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
}

xhr.open('GET', url, true);
xhr.send(data);
xhr.onreadystatechange = function () {
    try {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {

            }
        }
    } catch (e) {

    }
}

// JQuery ajax 也是基于XMLHttpRequest封装的
