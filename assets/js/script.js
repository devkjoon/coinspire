// const update = setInterval(getBtcApi, 1000);

function getBtcApi() {
  let requestURL = `https://api.coincap.io/v2/assets/bitcoin`
  fetch(requestURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data)
    updateBtc(data)
  })
}

let updateBtc = function(btcData) {
  document.querySelector('#btcLivePrice').innerText = "$" + btcData.data.priceUsd.slice(0, 8);
}