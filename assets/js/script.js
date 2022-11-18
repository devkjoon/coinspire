// const update = setInterval(getBtcApi, 1500);

// function getBtcApi() {
//   let requestURL = `https://api.coincap.io/v2/assets/bitcoin`
//   fetch(requestURL)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data)
//     updateBtc(data)
//   })
// }
function getBtcApi() {
  let requestURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`
  fetch(requestURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data)
    updateBtc(data) 
  })
}

// let updateBtc = function(btcData) {
//   document.querySelector('#btcLivePrice').innerText = "$" + btcData.data.priceUsd.slice(0, 11);
// }

let updateBtc = function(btcData) {
  document.querySelector('#btcLivePrice').innerText = "$" + btcData.RAW.BTC.USD.PRICE;
}