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

		// $('#contact-form1').on
		let data_form = document.getElementById("contact-form1");
		data_form.addEventListener('submit', (e) =>{
			e.preventDefault();
			

			let a = $.post( 'https://qarisoft.co/api/whb',$( "#contact-form1" ).serialize());
			console.log(a)
			document.getElementById("contact-form1").reset();
			$('#form-success').show();
			$('#form-success').css("display","flex");
			
			$('#thnx-card').slideDown();
			
			// e.target.action='https://qarisoft.co/api/whb'
			// location.reload();
			
		});
		$('#close-thnx-card').on('click',()=>{
			$('#thnx-card').slideUp();

			$('#form-success').hide();
			// location.reload()
		})

	}); // end document ready function
}(jQuery));
