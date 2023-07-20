// End jQuery
(function($){
	"use strict";

    $(document).ready( function() {

		/* ==================================================
			Preloader Init
		===============================================*/
		$('.service-box-2').on('mouseleave',function () {
			$('.swiper-button-prev').css("color","#024959")
			$('.swiper-button-next').css("color","#024959")
		});

		$('.service-box-2').on('mouseenter',function () {
			$('.swiper-button-prev').css("color","#fff")
			$('.swiper-button-next').css("color","#fff")
			
			
		});

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
				delay: 500000,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					slidesPerColumn: 1,
					spaceBetween: 40,
				},
				768: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 3.5,
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
			
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					slidesPerColumn: 2,
					// spaceBetween: 50,
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
				delay: 400000,
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
	
		$('.left-hdr-pic').height("+="+"150px");
		$('.left-hdr-pic .swiper-wrapper').height("+="+"150px");
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
			if (!$(this).prev().hasClass("show-more")) {
				
					$(this).prev().addClass("show-more");
			}else{
				$(this).prev().removeClass("show-more");
			}

		});
		
	

			$('.preloader-w').addClass('preloader-deactivate');


		// });


		// $(window).on('beforeunload', function() {
		// 	$('.preloader').addClass('preloader-deactivate');
			
		// });
		// let pp = $('.service-desc-2 p');



		// $('.c-green').on('click',function () {
		// 	if ($(this).siblings('p').hasClass('show')) {
		// 		$(this).siblings('p').removeClass('show')
		// 	}else{

		// 		$(this).siblings('p').addClass('show');
		// 	}
		// });


		
		// $('.ani2').();
		// $('.ani').delay(100000).css({
		// 	"opacity": "1",
		// 	"position": "relative",
		// 	"right":  "0%",
		// })

		
    }); // end document ready function
}(jQuery));
