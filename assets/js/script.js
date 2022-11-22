// const updateBtcLive = setInterval(getBtcApi, 1500);
// const apiKey = `850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`

function getBtcApi() {
  let requestURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`;
  fetch(requestURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      updateBtc(data);
    });
}

let updateBtc = function (btcData) {
  document.querySelector("#livePrice").innerText =
    "$" + btcData.RAW.BTC.USD.PRICE;
};

document.querySelector("#searchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  getRandomApi();
});

function getRandomApi() {
  let randomApiUrl = `https://min-api.cryptocompare.com/data/blockchain/list?api_key=850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`;
  for (let i=1; i<5; i++) {
  fetch(randomApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      updatePrice(data, i);
    });
  }
}

let updatePrice = function (randomData, i) {
  let keys = Object.keys(randomData.Data);
  console.log(Math.floor(Math.random() * keys.length));
  let propertyName = keys[Math.floor(Math.random() * keys.length)];
  console.log(propertyName);
  let symbolName = randomData.Data[propertyName].symbol;
  console.log(symbolName);
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${symbolName}&tsyms=USD`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#coin" + i + "price").innerText = `$${data.USD}`;
      document.querySelector("#coin" + i + "name").innerText = symbolName;
    });
};

document.querySelector('#searchbar').addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    findApi()
  }
})

function findApi() {
  let inputValue = (document.querySelector('#searchbar').value)
  let findCoin = 
}