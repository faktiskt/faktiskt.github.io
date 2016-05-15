$(document).ready(function() {
	$('#trigger').on('click', function() {
		$('.mobile-toggle').slideToggle(600);
	});
	$('.index li a').on('touchstart', function() {
		$(this).css({backgroundColor: '#202020', color: '#fff'});
	});
});