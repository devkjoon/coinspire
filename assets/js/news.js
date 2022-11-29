

// window.onload = function () {
//     newsApi()
// }

function newsApi() {
    let requestURL = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=850252ca876085a93a414bceb298e21862313b438417b87364eb0fe9aab45e1c`
    fetch(requestURL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
        appendArticles(data)
    })
}

let appendArticles = function (artData) {
    document.querySelector('#website1').src = artData.Data[1].guid
    document.querySelector('#website2').src = artData.Data[2].guid
    document.querySelector('#website3').src = artData.Data[6].guid
}