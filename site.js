function promptUser(){
	var input = prompt("How large would you like your canvas? (Please select a size between 16 and 100)");
	if (input <= 100 && input >= 16){
		return input;
	}
	else {
		promptUser();
	}
}

$(document).ready(function(){
	var gridsize;
	$('#startbutton').click(function(){
		gridsize = promptUser();
	})

		for(var x = 0; x <= gridsize; x ++) {
			for ( var y = 0; y <= gridsize; y++) {
				var boxes = $("<div class ='boxes'></div>");
				boxes.appendTo('.warehouse');
			}
		}

});
