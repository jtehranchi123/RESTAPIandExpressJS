

import express from 'express';
import fetch from 'node-fetch';
var app = express();



// PORT NUMBER
const port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});



app.get('/', (req, res) => {
    const api_key = '566cd509fae9b7d8663706cef40a59d3f26dbc8e';
    const url_api = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}&ids=BTC,ETH,XRP&interval=1d`;
    fetch(url_api)
        .then(res => res.json())
        .then(data => console.log(data))
});

// Post request for bitcoin price
app.get('/btc', (req, res) => {
    const api_key = '566cd509fae9b7d8663706cef40a59d3f26dbc8e';
    const url_api = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}&ids=BTC,ETH,XRP&interval=1d`;
    fetch(url_api)
        .then(res => res.json())
        .then(data => res.send(data))
});





