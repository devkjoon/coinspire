// const updateBtcLive = setInterval(getBtcApi, 1500);
// const apiKey = `850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`
const searchbar = document.querySelector('#searchbar')
const randomSearchBtn = document.querySelector('#randomSearchBtn')
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

document.querySelector("#randomSearchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  getRandomApi();
});

function getRandomApi() {
  let randomApiUrl = `https://min-api.cryptocompare.com/data/blockchain/list?api_key=850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`;
  fetch(randomApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    for (let i=1; i<5; i++) {
      updatePrice(data, i);
    }
    });
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

function scrollFunction() {
  let e = document.querySelector('#searchCard')
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  })
}

searchbar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    findApi()
    searchbar.input = ""
  }
})

randomSearchBtn.addEventListener("click", (e) => {
  e.preventDefault()
  findApi()
  searchbar.input = ""
})

// function findApi() {
//   // let inputValue = searchbar.value
//   // let findCoin = 
//   const options = { 
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '4099cc567dmsh223d71af5dae052p129c41jsn7d980d7d23f6',
//       'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list?edition_currency_id=12&time_utc_offset=28800&lang_ID=1&sort=PERC1D_DN&page=1', options)
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       console.log(data)
//     })
//     .catch((err) => {
//       console.error(err)
//     });
// }

// function findApi() {
//   let inputValue = searchbar.value
//   let findCoin = 
// }