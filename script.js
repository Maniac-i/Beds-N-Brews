//Brewery API call

var cityName = "cleveland";
var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;

function breweryCall() {

$.ajax({

url: breweryURL,

method: "GET"

}).then(function(response) {

  console.log(response);

  var breweryName = response[0].name;
  console.log(breweryName);

  var breweryAddress = response[0].street;
  console.log(breweryAddress);

  var breweryWebsite = response[0].website_url;
  console.log(breweryWebsite);

  })
}

breweryCall();