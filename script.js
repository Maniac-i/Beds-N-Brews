//Brewery API call

var cityName = "cleveland";
var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;

function breweryCall() {

$.ajax({

url: breweryURL,

method: "GET"

}).then(function(response) {

  console.log(response);

  })
}

breweryCall();