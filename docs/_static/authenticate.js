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
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    debugger;
    var key = "authorized";

    if (getParameterByName(key)) {
        document.cookie = key + "=true";
        window.location.href = "/en/latest";
    } else if (!getCookie(key)) {
        window.location.href = "/en/latest/_static/access-denied.html";
    }

})(window);