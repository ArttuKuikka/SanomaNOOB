$(document).ready(function(){

	$(window).on('beforeunload', function(e) {
		e.preventDefault();
		return "Oletko varma että haluat poistua";
	});

	var ifra = $('iframe').contents().find('.answer');
	ifra[0].addEventListener('input', function(){
		let k = ifra.html();
		console.log( "proo test: " + btoa(k.toString()));
	})
	
});
