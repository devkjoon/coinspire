window.onload = function () {
    newsApi()
}

function newsApi() {
  let requestURL = `https://api.marketaux.com/v1/news/all?countries=us&language=en&limit=3&api_token=aIbPoiCRIojTnvPvL1hJJArYIMY3qlglxeJdHgB3`;
  fetch(requestURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < 3; i++) {
        appendArticles(data, i);
      }
    });
}

let appendArticles = function (artData, i) {
  document.querySelector("#article" + i).src = artData.data[i].image_url;
  document.querySelector("#title" + i).innerText = artData.data[i].title;
  document.querySelector("#text" + i).innerText = artData.data[i].snippet;
  document.querySelector("#link" + i).href = artData.data[i].url;
};

