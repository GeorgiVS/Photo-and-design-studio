function MobileDetect() {
	var UA = navigator.userAgent.toLowerCase();
	return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA)) ? true : false;
}
jQuery(document).ready(function ($) {
	if (!MobileDetect()) {
		$nav = $(".layout-fixed");
		$window = $(window);
		$h = $nav.offset().top;
		$window.scroll(function () {
			if ($window.scrollTop() > $h) {
				$nav.addClass("layout-fixed-active");
			} else {
				$nav.removeClass("layout-fixed-active");
			}
		});
	}
});