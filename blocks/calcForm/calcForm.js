$(document).ready(function(){
	$('.js-calcForm--input').change(function(){
		$('.js-calcForm--col').find('img:first').attr('src', $('.js-calcForm--input option:selected').attr('data-path'));
	});
});