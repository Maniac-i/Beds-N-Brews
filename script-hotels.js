//this needs to be edited to be an input for the search function
//hard coded in city name for the time being
var cityName_hardcode = "minneapolis";

function hotelSearch(cityName) {
    var cityName = cityName.toString();
    //need to add some functionality that changes spaces to '%20'
    var cityQuery = "&query=" + cityName;
    var baseURL = "https://hotels4.p.rapidapi.com/locations/search?locale=en_US";
    var queryURL = baseURL + cityQuery;

    //code snippet for AJAX call from the Hotels API Dojo Documentation
    const settings = {
	    "async": true,
	    "crossDomain": true,
        "url": queryURL,
        "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "0e5394610fmsh72d5e907462569dp145318jsneb5cc0c2b49e",
		    "x-rapidapi-host": "hotels4.p.rapidapi.com"
	    }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        var hotelsArray = response.suggestions[3].entities;
        console.log(hotelsArray);
        var hotelsArrayLength = hotelsArray.length;

        //for loop looping through the array of returned hotels
        for (var i = 0; i < hotelsArrayLength; i++) {
            var hotelName = hotelsArray[i].name;
            console.log(hotelName);
            var hotelNameHTML = $("<h2>").text(hotelName);
        }

    });
}

hotelSearch(cityName_hardcode);