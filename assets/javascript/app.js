$(document).ready(function() {


    var buttonsArray = ["CATS", "DOGS", "DUCKS"];


    console.log(buttonsArray);

    $("#aside").append("<input id='textBox'>");
    $("#aside").append("<input id='submitBtn' type='submit' style=' height: 50px; width:100px'>");

    for (var i = 0; i < buttonsArray.length; i++) {
        var initialButtons = $("<input type='button' class='topButtons' value='" + buttonsArray[i] + "' style='margin-right:5px'/>");

        $(".buttonsDisplay").append(initialButtons);
        console.log(buttonsArray[i]);
    }

    $('input:submit').on("click", function() {
        var userInput = $("#textBox").val().trim();
        console.log("userInput " + userInput);
        
        var additionalButtons = $("<input type='button' class='topButtons' value='" + userInput + "' style='margin-right:5px'/>");
        $(".buttonsDisplay").append(additionalButtons);
        console.log(additionalButtons);

    });



    $('input:button').on("click", function() {


        var buttonVal = $(this).val().trim();
        console.log(this);


        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + buttonVal;
        $.ajax({
                url: queryURL,
                method: 'GET'
            })

            .done(function(response) {
                console.log(response);
                var imageUrl = response.data.fixed_width_downsampled_url;
                var apiImage = $("<img>");

                // Setting the catImage src attribute to imageUrl
                apiImage.attr("src", imageUrl);
                apiImage.attr("alt", "image");

                // Prepending the catImage to the images div
                $(".imagesDisplay").prepend(apiImage);
            });



    })




})