const now = setInterval(getApi, 10000);

// const baseURL = "https://rest.coinapi.io/v1/assets";
const btcApi = 'https://rest.coinapi.io/v1/exchanges?filter_exchange_id=btc'
const options = {
  headers: {
    Authorization: "41254972-9103-42DA-B4AC-F785AF290950"
  }
};

function getApi() {
  fetch(btcApi, options)
  .then( res => res.json() )
  .then( data => {
    console.log(data);
    btcData(data) 
  });
}

let btcData = function (data) {
  let btcLivePrice = document.querySelector('#btcLivePrice')
  btcLivePrice.innerText = data[1].price_usd;
}

// function getBtcApi() {
//   let btcApi = 'https://rest.coinapi.io/v1/exchanges?filter_exchange_id=btc'
//   fetch(btcApi, options)
//   .then( res => res.json() )
//   .then((data) => {
//     console.log(data);
//     btcTracker(data);
//   });
// }
// //   // let btcTracker = function(coinData) {

// //   // }
// getBtcApi()