let ws = new WebSocket('wss://stream.binance.us:9443/ws/btcusd@trade');
let stockPriceElement = document.getElementById('current-btc-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    console.log(stockObject.p);
    stockPriceElement.innerText = price;

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'rgb(0,255,171)': 'red';

    lastPrice = price;
};