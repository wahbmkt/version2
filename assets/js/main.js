// End jQuery
(function($){
	"use strict";

    $(document).ready( function() {

		/* ==================================================
			Preloader Init
		// ===============================================*/
		// $('.service-box-2').on('mouseleave',function () {
		// 	$('.swiper-button-prev').css("color","#024959")
		// 	$('.swiper-button-next').css("color","#024959")
		// });

		// $('.service-box-2').on('mouseenter',function () {
		// 	$('.swiper-button-prev').css("color","#fff")
		// 	$('.swiper-button-next').css("color","#fff")
			
			
		// });

        var mybutton = document.getElementById("scrtop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            // mybutton.style.display = "none";
          }
        }


		
		
		const ser_slidr = new Swiper('.ser-sldr', {
			loop: true,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next.pro",
				prevEl: ".swiper-button-prev.pro",
				nested:true,
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
					slidesPerView: 3,
					slidesPerColumn: 2,
					spaceBetween: 30,
				},
			},
		});
		

		const rev_sldr = new Swiper(".review-sldr", {
			// Optional parameters
			loop: true,
			autoplay: {
				delay: 4000,
				// deura
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1201: {
					slidesPerView: 2,
				},
				1300: {
					slidesPerView: 2,
				},
			},
		});

		const our_sldr = new Swiper('.project-sldr0', {
			loop: true,
			autoplay: {
				delay: 4000,
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
