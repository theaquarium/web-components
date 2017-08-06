$(document).ready(function(){
	$('#hamburger-menu-container').click(function(){
		$(this).toggleClass('open');
		$("#hamburger-menu-menu").toggle("slide");
	});
});
