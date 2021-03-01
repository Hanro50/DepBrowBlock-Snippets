//potentially obsolete

//var isIE = navigator.userAgent.indexOf('Trident') > -1 || navigator.userAgent.indexOf('MSIE') > -1;
var isIE = false;
if (!isIE) {
    try {
        console.log(
            "test")
        if (!'fetch' in window) {
            isIE = true;
        }
    } catch (e) {
        isIE = true;
    }
}

if (isIE) {
    window.location = "/unsupported.html"
}
