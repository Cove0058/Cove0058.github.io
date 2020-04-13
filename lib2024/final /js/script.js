//I tried to get JavaScript to work, but i could not get it to work no matter what I tried//
window.onload = init;


function init() {document.getElementById("indicator-text").innerHTML="";
}

function showformValues(form){
	var formValues = $(form).serializeArray(); 		
	$.each(formValues, function(index, field){
