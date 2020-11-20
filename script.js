//displays last search result upon reloading
function setInitialDisplay() {

  if (!localStorage.getItem("searchedCity")) {
    breweryCall("Cleveland");
   // hotelSearch("Cleveland");
  } else {
    breweryCall(localStorage.getItem("searchedCity"));
   // hotelSearch(localStorage.getItem("searchedCity"));
  }
}
 setInitialDisplay();

//Brewery API call
function breweryCall() {

  var cityName = "cleveland";
  var breweryType = "brewpub"
  var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;

  //Updates the breweryURL if a breweryType was selected
  if (breweryType) {
    breweryURL = breweryURL + "&by_type=" + breweryType;
  }

  $.ajax({

    url: breweryURL,

    method: "GET"

  }).then(function (response) {

    console.log(response);
  
    //Grabs the HTML element that the api information will be appended too
    mainDiv = $(".mainDiv");

    //clear previous search results
    mainDiv.empty();

    //sets variable to the length of the array returned by the API call
    var arrayLength = response.length;

    //Loop to display multiple resutls
    for (var i = 0; i < arrayLength; i++) {

      //created variables for the inforamtion we want to display
      var breweryName = response[i].name;
      var breweryAddress = response[i].street;
      var breweryWebsite = response[i].website_url;

    //create html elements to display information
    createdDiv = $("<div>").attr("class", "brewery");
    createdH2 = $("<h2>" + breweryName + "<h2>").attr("class", "breweryName");
    createdP1 = $("<p> Address: " + breweryAddress + "<p>").attr("class", "breweryAddress");
    createdP2 = $("<p>Website: <a href=" + breweryWebsite + ">" + breweryWebsite + "</a></p>").attr("class", "breweryWebsite");

    //appends created HTML elements
    mainDiv.append(createdDiv, createdH2, "<hr>", createdP1, createdP2);

    }
    //set localStorage
    localStorage.setItem("searchedCity", cityName);
  })
}

breweryCall();

//add click event to search button
//calls the API functions
$(".searchButton").on("click", function (event) {

  event.preventDefault;

  breweryCall();
  hotelSearch(cityName);
});