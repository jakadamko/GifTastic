$(document).ready(function() {


    var buttonsArray = ["CATS", "DOGS", "DUCKS"];


    console.log(buttonsArray);



    for (var i = 0; i < buttonsArray.length; i++) {
    	 var initialButtons = $("<input type='button' class='topButtons' value='"+buttonsArray[i]+"' style='margin-right:5px'/>");
    	 	$(".buttonsDisplay").append(initialButtons);
    }

    $(".buttonsDisplay").prepend($("<input/>"));
 



})