if (document.body.clientWidth < 992) {
	$('.js-nav--menuLink').attr('href', '#');
	$('.js-nav--menuCallSubmenu').click(function () {
	$('.nav--submenu').toggleClass('nav--submenu-active');
	});
}