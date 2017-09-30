$(document).ready(function() {


    var buttonsArray = ["CATS", "DOGS", "DUCKS"];


    $("#aside").append("<input id='textBox'>");
    $("#aside").append("<input id='submitBtn' type='submit' style=' height: 50px; width:100px'>");

    for (var i = 0; i < buttonsArray.length; i++) {
        var initialButtons = $("<input type='button' class='topButtons' value='" + buttonsArray[i] + "' style='margin-right:5px'/>");

        $(".buttonsDisplay").append(initialButtons);
    }

    $('input:submit').on("click", function() {
        var userInput = $("#textBox").val().trim();
        console.log("userInput " + userInput);

        var additionalButtons = $("<input type='button' class='topButtons' value='" + userInput + "'style='margin-right:5px'/>");
        $(".buttonsDisplay").append(additionalButtons);
        console.log(additionalButtons);
    });


    $(document).on("click", 'input:button', function() {

        //var buttonVal = $(this).val().trim();
        console.log("THIS " + this);

        buttonVal = $(this).val().trim();
        //queryURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&api_key=dc6zaTOxFJmzC&limit=5";

        //var queryURL = "http://api.giphy.com/v1/gifs/search?q='"+ buttonVal +"&api_key=dc6zaTOxFJmzC&limit=1";
        //var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + buttonVal;
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {

            var results = response.data;
            console.log(response);
            for (var i = 0; i < 5; i++) {
                var imageUrl = results[i].images.downsized.url;
                //var imageUrl = response.data.fixed_height_downsampled_url;
                var apiImage = $("<img/>");

                // Setting the catImage src attribute to imageUrl
                apiImage.attr("src", results[i].images.downsized.url);
                apiImage.attr("alt", "image");
                apiImage.addClass("gif");
                apiImage.attr("data-still", results[i].images.downsized.url)
                apiImage.attr("data-animate", results[i].images.downsized.url)
                .attr('data-state','still');
                //apiImage.attr("data-state", "still");

                // Prepending the catImage to the images div
                $(".imagesDisplay").prepend(apiImage);
            }

        })

         $(document).on("click", '.gif', function() {
        //$(".gif").on("click", function() {
        //$(document).on("click", 'img', function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });

        
    })
})
