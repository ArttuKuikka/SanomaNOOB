$(document).ready(function(){

	$(window).on('beforeunload', function(e) {
		return 'Oletko varma että haluat poistua?';
	});
});
