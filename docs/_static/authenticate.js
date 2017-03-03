(function (window) {

    function getParameterByName(name, url) {
        if (!url) {
        url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function getCookie(name) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;\s*)" + name + "\s*\=\s*([^;]*).*$)|^.*$"), "$1");
    }

    debugger;
    var key = "authorized";

    if (getParameterByName(key)) {
        document.cookie = key + "=true";
        window.location.href = "/";
    } else if (!getCookie(key)) {
        console.log("key=" + key)
        console.log("denied");
        //window.location.href = "/en/latest/_static/access-denied.html";
    }

})(window);