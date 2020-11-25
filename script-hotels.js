//this needs to be edited to be an input for the search function
//hard coded in city name for the time being
//var cityName_hardcode = "minneapolis";


function hotelSearch(inputtedCity) {
    var cityName = inputtedCity;
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
           // "x-rapidapi-key": "5d61db7820mshae4e4e841946243p1572eejsn52ba1774ec3f",
            //"x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        var hotelsArray = response.suggestions[3].entities;
        console.log(hotelsArray);
        var hotelsArrayLength = hotelsArray.length;

        //Div the api info will be appended to
        var mainDiv = $(".hotels");
        //clear previous search results
        mainDiv.empty();

        //for loop looping through the array of returned hotels
        for (var i = 0; i < hotelsArrayLength; i++) {

            //variable to assign hotel names to
            var hotelName = hotelsArray[i].name;
            var lat = hotelsArray[i].latitude;
            var long = hotelsArray[i].longitude
            console.log(hotelName);

            //Created html elements to display information
            var hotelNameHTML = $("<h2>").text(hotelName);
            var createdDiv = $("<div>").attr("class", "hotel box");
            var createdH2 = hotelNameHTML.attr("class", "hotelName");
            var map = $('<div class="imageDiv"><img src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/' + long + ',' + lat + ',14/400x240?access_token=pk.eyJ1Ijoiam9lbWFuaWFjaSIsImEiOiJja2hzNDVkeHcwNjdsMnd0OTJ2NXM5OHRiIn0.iftE3PSzzKefF9YT6OjliQ" alt="Map of the Edmund Pettus Bridge in Selma, Alabama."></div>').attr("class", "staticMap");
            //appends created HTML elements
            createdDiv.append(createdH2, "<hr>", map);
            mainDiv.append(createdDiv);
        }

    });
}

