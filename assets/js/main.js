// End jQuery
(function($){
	"use strict";

    $(document).ready( function() {

		/* ==================================================
			Preloader Init
		===============================================*/


        var mybutton = document.getElementById("scrtop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }


		
		$(".typed").typed({
			strings: [" لخدمات التسويق الالكتروني"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 100,
			// time before typing starts
			startDelay: 1200,
			// backspacing speed
			backSpeed: 10,
			// time before backspacing
			backDelay: 600,
			// loop
			loop: true,
			// false = infinite
			loopCount: Infinity,
			// show cursor
			showCursor: false,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});




		
		
		var swiper = new Swiper('.project-sldr', {
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					slidesPerColumn: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 30,
				},
			},
		});
		
		var swiper = new Swiper('.project-sldr0', {
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 3,
					slidesPerColumn: 3,
					spaceBetween: 50,
				},
			},
		});
		
		
		const swiperStageRight = new Swiper(".review-sldr", {
			// Optional parameters
			loop: true,
			autoplay: {
				delay: 4000,
				// deura
			},
			freeMode: true,
			grabCursor: true,
			// slidesPerView: 1,
			// spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-prev",
				prevEl: ".swiper-button-next"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1201: {
					slidesPerView: 2,
				},
				1300: {
					slidesPerView: 2.5,
				},
			},
		});
		
		/* ==================================================
			# Review Slider
		 ===============================================*/

		$('.nav-link').on('click',function(){
			if ($('.main-wrapper .bsnav-mobile').hasClass('in')) {
				// console.log('123123132132');
				$('.main-wrapper .bsnav-mobile').removeClass('in');
			}
			if ($('.navbar-toggler.toggler-spring').hasClass('active')) {
				$('.navbar-toggler.toggler-spring').removeClass('active');
			}
			
			
		});
		
		$('.btn-1.btn-circle.btn-sm').on('click',function(){
		
			// $(this).togo
			// .css("height","10px")
			if (!$(this).prev().hasClass("show-more")) {
				
				// $(this).prev().css(
				// 	{
				// 		"display":"block",
				// 		"background-color":"white"
				// 	}
				// 	);
					$(this).prev().addClass("show-more");
			}else{
				$(this).prev().removeClass("show-more");
				// $(this).prev().css(
				// 	{
				// 	"display":"none",
				// 	}
				// 	);
			}
			// $img = $(this).parent(".service-desc-2");
			// $img.css("display","none");
			// console.log(
			
			// );
			// console.log(window.getComputedStyle(this,':before').content);

		});
		$(window).on ('load', function (){
			if ($(".wow").length) { 
				var wow = new WOW({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       20,          // distance to the element when triggering the animation (default is 0)
				mobile:       true, // trigger animations on mobile devices (default is true)
				live:         true,       // act on asynchronously loaded content (default is true)
			});
			wow.init();
			}
		});
		$(window).on('load', function() {
			if ($('.preloader0').hasClass('preloader-deactivate')) {
				// $('.preloader').show()
				

			}else{

				$('.preloader0').addClass('preloader-deactivate');
			}
		});

		
    }); // end document ready function
}(jQuery));
