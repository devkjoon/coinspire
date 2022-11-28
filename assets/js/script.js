// const updateBtcLive = setInterval(getBtcApi, 5000);
// const apiKey = `850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`
const searchbar = document.querySelector("#searchbar");
const randomSearchBtn = document.querySelector("#randomSearchBtn");
const searchBtn = document.querySelector('#searchBtn')

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
  document.querySelector("#livePrice").innerText = btcData.DISPLAY.BTC.USD.PRICE;
  document.querySelector('#btcPercentage24hr').innerText = "Change (24HR): " + btcData.DISPLAY.BTC.USD.CHANGE24HOUR + " (" + btcData.DISPLAY.BTC.USD.CHANGEPCT24HOUR + "%)"
  document.querySelector('#btcPercentageHour').innerText = "Change (Hour): " + btcData.DISPLAY.BTC.USD.CHANGEHOUR + " (" + btcData.DISPLAY.BTC.USD.CHANGEPCTHOUR + "%)"
  document.querySelector('#btcHigh').innerText = "24HR High: " + btcData.DISPLAY.BTC.USD.HIGH24HOUR
  document.querySelector('#btcLow').innerText = "24HR Low: " + btcData.DISPLAY.BTC.USD.LOW24HOUR
  document.querySelector('#btcHighHr').innerText = "1HR High: " + btcData.DISPLAY.BTC.USD.HIGHHOUR
  document.querySelector('#btcLowHr').innerText = "1HR Low: " + btcData.DISPLAY.BTC.USD.LOWHOUR
};

randomSearchBtn.addEventListener("click", (e) => {
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
      for (let i = 1; i < 5; i++) {
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

// let updatePrice = function (randomData, i) {
//   let keys = Object.keys(randomData.Data);
//   console.log(Math.floor(Math.random() * keys.length));
//   let propertyName = keys[Math.floor(Math.random() * keys.length)];
//   console.log(propertyName);
//   let symbolName = randomData.Data[propertyName].symbol;
//   console.log(symbolName);
//   fetch(
//     `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbolName}&tsyms=USD`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#coin" + i + "price").innerText = data.DISPLAY.symbolName.USD.PRICE;
//       document.querySelector("#coin" + i + "name").innerText = symbolName;
//     });
// };

function scrollFunction() {
  let e = document.querySelector("#searchCard");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "center",
  });
}

function scrollFunction2() {
  let e = document.querySelector('#smallerCards')
  e.scrollIntoView({
    block: "center",
    behavior: "smooth", 
    inline: "center",
  })
}

searchbar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    findApi();
    findApi2();
  }
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  findApi();
  findApi2();
})



// Function for navburger menu
$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

function findApi() {
  let userSearch = document.querySelector('#searchbar').value.toUpperCase()
  fetch(
    `https://api.polygon.io/v3/reference/tickers?ticker=X:${userSearch}USD&market=crypto&date=2022-11-28&active=true&apiKey=7xjpB0pxhlPMl42aHy891kYT99ezp_oZ`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      findApiDet(data);
    });
}

let findApiDet = function (findData) {
  document.querySelector('#searchName').innerText = findData.results[0].base_currency_name
  document.querySelector('#searchSymbol').innerText = findData.results[0].base_currency_symbol
}

function findApi2() {
  let userSearch = document.querySelector('#searchbar').value.toUpperCase()
  fetch(
    `https://api.polygon.io/v2/aggs/ticker/X:${userSearch}USD/range/1/day/2022-11-27/2022-11-28?adjusted=true&sort=asc&limit=120&apiKey=7xjpB0pxhlPMl42aHy891kYT99ezp_oZ`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      findApiDet2(data);
    });
    searchbar.value = ""
}

let findApiDet2 = function (findData) {
  document.querySelector('#searchPrice').innerText = "$" + findData.results[0].o
  document.querySelector('#twentyFourHigh').innerText = "24HR High: $" + findData.results[0].h
  document.querySelector('#twentyFourLow').innerText = "24HR Low: $" + findData.results[0].l
}