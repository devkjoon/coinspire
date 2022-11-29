// const updateBtcLive = setInterval(getBtcApi, 10000);
// const apiKey = `850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`
const searchbar = document.querySelector("#searchbar");
const randomSearchBtn = document.querySelector("#randomSearchBtn");
const searchBtn = document.querySelector("#searchBtn");

window.onload = function () {
  getBtcApi();
  getRandomApi();
};

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
    btcData.DISPLAY.BTC.USD.PRICE;
  document.querySelector("#btcPercentage24hr").innerText =
    "Change (24HR): " +
    btcData.DISPLAY.BTC.USD.CHANGE24HOUR +
    " (" +
    btcData.DISPLAY.BTC.USD.CHANGEPCT24HOUR +
    "%)";
  document.querySelector("#btcPercentageHour").innerText =
    "Change (1HR): " +
    btcData.DISPLAY.BTC.USD.CHANGEHOUR +
    " (" +
    btcData.DISPLAY.BTC.USD.CHANGEPCTHOUR +
    "%)";
  document.querySelector("#btcHigh").innerText =
    "24HR High: " + btcData.DISPLAY.BTC.USD.HIGH24HOUR;
  document.querySelector("#btcLow").innerText =
    "24HR Low: " + btcData.DISPLAY.BTC.USD.LOW24HOUR;
  document.querySelector("#btcHighHr").innerText =
    "1HR High: " + btcData.DISPLAY.BTC.USD.HIGHHOUR;
  document.querySelector("#btcLowHr").innerText =
    "1HR Low: " + btcData.DISPLAY.BTC.USD.LOWHOUR;
  document.querySelector("#btcIMG").src =
    "https://www.cryptocompare.com" + btcData.DISPLAY.BTC.USD.IMAGEURL;
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
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbolName}&tsyms=USD`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#coin" + i + "price").innerText =
        data.DISPLAY[symbolName].USD.PRICE;
      document.querySelector("#coin" + i + "name").innerText = symbolName;
      document.querySelector("#coin" + i + "change24").innerText =
      "Change (24HR): " + 
        data.DISPLAY[symbolName].USD.CHANGE24HOUR +
        " (" +
        data.DISPLAY[symbolName].USD.CHANGEPCT24HOUR +
        "%)";
      document.querySelector("#coin" + i + "high24").innerText =
        "24HR High: " + data.DISPLAY[symbolName].USD.HIGH24HOUR;
      document.querySelector("#coin" + i + "low24").innerText =
        "24HR High: " + data.DISPLAY[symbolName].USD.LOW24HOUR;
      document.querySelector("#coin" + i + "high").innerText =
        "1HR High: " + data.DISPLAY[symbolName].USD.HIGHHOUR;
      document.querySelector("#coin" + i + "low").innerText =
        "1HR Low: " + data.DISPLAY[symbolName].USD.LOWHOUR;
      document.querySelector("#coin" + i + "change").innerText =
        "Change (1HR): " +
        data.DISPLAY[symbolName].USD.CHANGEHOUR +
        " (" +
        data.DISPLAY[symbolName].USD.CHANGEPCTHOUR +
        "%)";
      document.querySelector("#coin" + i + "img").src =
        "https://www.cryptocompare.com" + data.DISPLAY[symbolName].USD.IMAGEURL;
    });
};

function scrollFunction() {
  let e = document.querySelector("#searchCard");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "center",
  });
}

function scrollFunction2() {
  let e = document.querySelector("#smallerCards");
  e.scrollIntoView({
    block: "center",
    behavior: "smooth",
    inline: "center",
  });
}

searchbar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    findApi();
  }
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  findApi();
});

// Function for navburger menu
$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

function findApi() {
  let userSearch = document.querySelector("#searchbar").value.toUpperCase();
  fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${userSearch}&tsyms=USD`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      findApiDet(data, userSearch);
    });
}

let findApiDet = function (data, userSearch) {
  document.querySelector("#searchSym").innerText =
    data.RAW[userSearch].USD.FROMSYMBOL;
  document.querySelector("#searchPrice").innerText =
    data.DISPLAY[userSearch].USD.PRICE;
  document.querySelector("#search24hrptc").innerText =
    "Change (24HR): " +
    data.DISPLAY[userSearch].USD.CHANGE24HOUR +
    " (" +
    data.DISPLAY[userSearch].USD.CHANGEPCT24HOUR +
    "%)";
  document.querySelector("#search24high").innerText =
    "24HR High: " + data.DISPLAY[userSearch].USD.HIGH24HOUR;
  document.querySelector("#search24low").innerText =
    "24HR Low: " + data.DISPLAY[userSearch].USD.LOW24HOUR;
  document.querySelector("#search24vol").innerText =
    "24HR Volume: " + data.DISPLAY[userSearch].USD.VOLUME24HOURTO;
  document.querySelector("#search1hrptc").innerText =
    "Change (24HR): " +
    data.DISPLAY[userSearch].USD.CHANGEHOUR +
    " (" +
    data.DISPLAY[userSearch].USD.CHANGEPCTHOUR +
    "%)";
  document.querySelector("#search1hrhigh").innerText =
    "1HR High: " + data.DISPLAY[userSearch].USD.HIGHHOUR;
  document.querySelector("#search1hrlow").innerText =
    "1HR Low: " + data.DISPLAY[userSearch].USD.LOWHOUR;
  document.querySelector("#search1hrvol").innerText =
    "1HR Volume: " + data.DISPLAY[userSearch].USD.VOLUMEHOURTO;
  document.querySelector("#searchIMG").src =
    "https://www.cryptocompare.com" + data.DISPLAY[userSearch].USD.IMAGEURL;
};
