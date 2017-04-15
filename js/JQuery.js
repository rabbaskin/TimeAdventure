$(document).ready(function() {
	$('.items').hide();
	$('.mArticle').click(function() {
		$('.items').slideToggle(250);
	});
})