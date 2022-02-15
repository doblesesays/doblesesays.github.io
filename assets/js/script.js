(function($){
	'use script';

	// Menu Responsive
	$('.mobile-menu').click(function(){
		$('.menu ul').slideToggle();
	});

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},300);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});


	var mixer = mixitup('.portfolio-full');
	var mixer = mixitup('.portF');
	var mixer = mixitup('.portF', {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 100
		}
	});


	$('.portfolio-item-single a.zoom').magnificPopup({
	  	type: 'image',
	   	gallery: {
	    	enabled: true
	  	},
	  	
	});

	// Sticky Menu
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll < 150){
			$('.header').removeClass('sticky');
		}else{
			$('.header').addClass('sticky');
		}
	});



	$('.menu nav ul').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 250,
		scrollThreshold: 0.2,
	});
	// Preloader
	$(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });

	// Testimonial
  	$(".testimonial-full").owlCarousel({
  		loop:true,
  		center:true,
  		items:1,
  		autoplay: true,
  	});

	// Send Email
	$('form').on('submit', function (e) {
		e.preventDefault();
		// Get value
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		// Form Validation
		if(name == ''){
			$('#nameStatus').html('Name is required').delay(5000).hide(800);
		}

		if(email == ''){
			$('#emailStatus').html('Email is required').delay(5000).hide(800);
		}

		if(phone == ''){
			$('#phoneStatus').html('Phone is required').delay(5000).hide(800);
		}

		if(subject == ''){
			$('#subjectStatus').html('Subject is required').delay(5000).hide(800);
		}

		if( message == '' ){
			$('#messageStatus').html('Message is required').delay(5000).hide(800);
		}

		if( name == ''  || phone == '' || email == '' || subject == '' || message == ''){
			return false;
		}

		$.ajax({
			url:"sendEmail.php",
			type:"POST",
			data:{name:name,email:email,phone:phone,subject:subject,message:message},
			success:function(resp){
				var j = JSON.parse(resp);
				if(j.status === true){
					$('.status-message').html('<span class="success-message">Email has been send sucessfully, Thanks!</span>').delay(5000).hide(800);
					$('form')[0].reset();
				}else{
					alert('Can\'t sent email for demo site');
				}
			},
			error:function(err){
				alert('error occured'+err);
			}
		});
	});

}(jQuery));