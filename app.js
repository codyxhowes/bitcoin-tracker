let ws = new WebSocket('wss://stream.binance.us:9443/ws/btcusd@ticker');
let stockPriceElement = document.getElementById('current-btc-price');
let stockDayPrice = document.getElementById('current-day-price')
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.c).toFixed(2);
    let day = parseFloat(stockObject.P).toFixed(2);
    console.log(stockObject.c);
    stockPriceElement.innerText = price;
    stockDayPrice.innerText = day;

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'rgb(0,255,171)': 'red';
    stockDayPrice.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'rgb(0,255,171)': 'red';

    lastPrice = price;
};