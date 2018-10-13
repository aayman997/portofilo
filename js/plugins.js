$(document).ready(function () {
	$('.carousel').carousel({
		interval: 2000
	});
	$('html').niceScroll();

	var header = $('.carousel .img-fluid'),
		toggle = $('#toggleOnOff'),
		progress = $('.progress-bar'),
		//portofiloImg = $('.portofilo-img'),
		//portImg = $('.portofilo-img img'),
		//portofiloText = $('.img-text'),
		toUp = $('.to-up');


	/* Start Nav bar */
	$('.nav-active li:not(".imgLogo")').on('click', function () {
		$('.nav-active li').removeClass('active');
		$(this).addClass('active');
	});

	$('.chevron-down').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#service').offset().top
		}, 650)
	});


	$('.nav-active li a').on('click', function () {
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 650)
	});

	$('.contactUsBtn').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#contactUs').offset().top
		}, 1000)
	});

	/* End Nav bar */

	/* Start Header *Hello* */

	$(header).css('height', $(window).height());
	$(window).resize(function () {
		$(header).css('height', $(window).height());
	});
	$(toggle).click(function () {
		$(toggle).toggleClass('fa-toggle-on', 'fa-toggle-off');
	});

	/* End Header *Hello* */

	/* Start About Us */
	$(progress).on('mouseenter', function () {
		$(this).addClass('progress-bar-animated');
	});
	$(progress).on('mouseleave', function () {
		$(this).removeClass('progress-bar-animated');
	});
	/* End About Us */
	/*

		$(portofiloImg).on('mouseenter', function () {
			$(this).find(portofiloText).slideDown(500);
			$(this).find(portImg).css({
				'transition': 'transform 0.5s ease-in-out',
				'transform': 'rotate(-15deg) scale(1.4)'
			})
		});
		$(portofiloImg).on('mouseleave', function () {
			$(this).find(portofiloText).slideUp(600);
			$(this).find(portImg).css({
				'transform': 'rotate(0deg) scale(1)'
			})
		});
	*/

	/* Start Back To Top */

	if ($(toUp).length) {
		var scrollTrigger = 300, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$(toUp).fadeIn(1000);
				} else {
					$(toUp).fadeOut(1000);
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$(toUp).on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 1000);
		});
	}

	/* End Back To Top */


});
