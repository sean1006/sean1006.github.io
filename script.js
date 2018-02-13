function myFunction() {
    document.getElementById('demo').innerHTML = "Paragraph changed.";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var red = Math.floor(s * 4.33898);
    var green = Math.floor(h * 11.13043);
    var blue = Math.floor(m * 4.33898);
    if (m % 2 == 1) // count back down
        red = 255 - red;
    if (h % 2 == 1) // count back down
        blue = 255 - blue;
    var color = "rgba(" + red + "," + green + "," + blue + ",1)";
    m = formatTime(m);
    s = formatTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('clockFrame').style.backgroundColor = color;
    var t = setTimeout(startTime, 500);
}
function formatTime(i) {
    if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
    return i;
}

function getStocks() {

    var reqestUrl = "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL&apikey=SLD1FHVM98S5Q5OL";
    var request = new XMLHttpRequest();
    var name;
    var price;

    request.open("GET", requestUrl, true);
    request.responseType = 'json';
    request.send();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var stockData = JSON.parse(this.responseText);
            useStockData(stockData);
        }
    };

    function useStockData(stockData) {
        name = stockData["Stock Quotes"][0]["1. symbol"];
        price = stockData['Stock Quotes'][0]['2. price'];
        document.getElementById('stock').innerHTML = name;
    }
}

function getStock() {
    function getJSONP(url, success) {

        var ud = '_' + +new Date,
            script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0] 
        || document.documentElement;

        window[ud] = function(data) {
            head.removeChild(script);
            success && success(data);
        };

        script.src = url.replace('callback=?', 'callback=' + ud);
        head.appendChild(script);

    }

    getJSONP('https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL&apikey=SLD1FHVM98S5Q5OL', function(data){
        document.getElementById('stock').innerHTML = stockData["Stock Quotes"][0]["1. symbol"];
    });  
}