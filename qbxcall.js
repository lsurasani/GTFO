var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.googleapis.com/qpxExpress/v1/trips/search", false);

xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);



var apikey = "AIzaSyDAPBHn2CYsE-qiaaHStaOfAHpGMnl67H8";


curl -d @request.json --header "Content-Type: application/json" https://www.googleapis.com/qpxExpress/v1/trips/search?key=apikey


