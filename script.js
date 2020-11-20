//Brewery API call

var cityName = "cleveland";
var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;

function breweryCall() {

$.ajax({

url: breweryURL,

method: "GET"

}).then(function(response) {

  console.log(response);

  //created variables for the inforamtion we want to display
  var breweryName = response[0].name;
  var breweryAddress = response[0].street;
  var breweryWebsite = response[0].website_url;
  
  //create html elements to display information
  mainDiv = $(".mainDiv");
  
  createdDiv = $("<div>").attr("class", "brewery");
  createdH2 = $("<h2>" + breweryName + "<h2>").attr("class", "breweryName");
  createdP1 = $("<p>" + breweryAddress + "<p>").attr("class", "breweryAddress");
  createdP2 = $("<a href=" + breweryWebsite + ">" + breweryWebsite + "</a>").attr("class", "breweryWebsite");

  mainDiv.append(createdDiv, createdH2, createdP1, createdP2);

  })
}

breweryCall();