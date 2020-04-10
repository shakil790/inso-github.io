$(document).ready(function(){
	
	//counter-up
	
	$('.number').counterUp({
		delay: 10,
		time: 1000
	});
	
	//achive-slider
	
	var slider = tns({
		container: '.achive-slider-active',
		items: 3,
		slideBy: 'page',
		autoplay: true,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>' , '<i class="fas fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },
		  540: {
			items: 1
		  },
		  768: {
			  items: 2
		  },
		  1169: {
			  items: 3
		  }
		}
	});
	
	
	//testimonial-slider
	
	var slider = tns({
		container: '.testimonial-slider-active',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		nav: true,
		mouseDrag: true,
		controls: false,
		navPosition: 'bottom',
	});
	
	//team-slider
	
	var slider = tns({
		container: '.team-slider-active',
		items: 4,
		slideBy: 'page',
		autoplay: false,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>','<i class="fas fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },
		  768: {
			items: 2 
		  },
		  992: {
			  items: 3
		  },
		  1169: {
			items: 4
		  }
		}
	});
	
	// responsive-menu

    jQuery('#mean-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "992"
    });
})