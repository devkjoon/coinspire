const baseURL = "https://rest.coinapi.io/v1/assets";

const options = {
  headers: {
    Authorization: "41254972-9103-42DA-B4AC-F785AF290950"
  }
};

function getApi() {
  fetch(baseURL, options)
  .then( res => res.json() )
  .then( data => console.log(data) );
}

function getBtcApi() {
  let btcApi = 'https://rest.coinapi.io/v1/exchanges?filter_exchange_id=btc'
  fetch(btcApi, options)
  .then( res => res.json() )
  .then((data) => {
    console.log(data);
    btcTracker(data);
  });
}
  // let btcTracker = function(coinData) {

  // }