$(document).ready(function(){

	// $(window).on('beforeunload', function(e) {
	// 	e.preventDefault();
	// 	return "Oletko varma että haluat poistua?";
	// });
	console.log("SanomaPRO tunnistettu");
	window.addEventListener('beforeunload',(event) =>{
		event.preventDefault();
	});
});