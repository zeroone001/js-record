function base64ToBlob (base64) {
    let base64Arr = base64.split(',');
    let base64String = '';
    let type = '';
    if (base64Arr.length > 1) {
        base64String = base64Arr[1];
        let prevstr = base64[0];
        type = prevstr.substring(prevstr.indexOf(':') + 1, prevstr.indexOf(';') + 1);
    }
    let bytes = atob(base64String);
    var bytesCode = new ArrayBuffer(bytes.length);
    var byteArray = new Uint8Array(bytesCode);
    for (var i = 0; i < bytes.length; i++) {
        byteArray[i] = bytes.charCodeAt(i);
    }
    return new Blob([byteArray], { type: imgtype });
}
