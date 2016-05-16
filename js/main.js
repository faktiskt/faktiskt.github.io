$(document).ready(function() {
	$('#trigger').on('click', function() {
		$('.mobile-toggle').slideToggle(600);
	});
	$('.index li a').on('touchstart', function() {
		$(this).css({backgroundColor: '#202020', color: '#fff'});
	});
	$('.index li a').on('touchend', function() {
		$(this).css({backgroundColor: 'transparent', color: '#333'});
	});
	$('.custom-btn').on('touchstart', function() {
		$(this).css({background: 'transparent', color: '#202020', outline: '1px solid #202020'});
	});
	$('.custom-btn').on('touchend', function() {
		$(this).css({background: '#202020', color: '#f0f0f0', outline: 'none',  border: 'none'});
	});
	$('nav a').on('touchstart', function() {
		$(this).css({backgroundColor: '#202020', color: '#fff'});
	});
	$('nav a').on('touchend', function() {
		$(this).css({backgroundColor: 'transparent', color: '#333'});
	});
	$('.home-link').on('touchstart', function() {
		$(this).css({borderBottom: '1px solid #202020'});
	});
	$('.home-link').on('touchend', function() {
		$(this).css({borderBottom: 'none'});
	});
});