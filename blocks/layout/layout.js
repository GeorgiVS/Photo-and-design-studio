jQuery(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.layout-fixed').addClass('layout-fixed-active');
		} else if ($(this).scrollTop() < 200) {
			$('.layout-fixed').removeClass('layout-fixed-active');
		}
	});
});