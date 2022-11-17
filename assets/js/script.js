const url = "https://rest.coinapi.io/v1/exchanges";

const options = {
  headers: {
    Authorization: "41254972-9103-42DA-B4AC-F785AF290950"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );