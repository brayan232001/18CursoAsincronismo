let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null, JSON.parse(this.responseText))
            }
        } else {
            const error = new Error("error "+url_api);
            callback(error, null);
        }
    }
    xhttp.send();
}