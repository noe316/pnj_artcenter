// web menu-submenu
	$(function(){
		var browserW = $(window).width();				
		// console.log(browserW)

		if(browserW > 768) {
			$('.drop').on("mouseenter focus", function(){
				$('.submenu').stop().slideDown();
				$('.bg').stop().slideDown();
			})
			$('.drop').on("mouseleave blur", function(){
				$('.submenu').stop().slideUp();
				$('.bg').stop().slideUp();
			})
		}

		$(".hamburger").on("click", function(){
			$(this).toggleClass('active');
			$('nav').toggleClass('on');
		})

		$('.drop').on("click", function() {
			$(this).find('.submenu').toggleClass('on2');
			$(this).toggleClass('active2');
		})
		

		$(window).resize(function() {

			var browserW = $(window).width();				
			// console.log(browserW)

			if(browserW > 768) {
				$('.drop').on("mouseenter focus", function(){
					$('.submenu').stop().slideDown();
					$('.bg').stop().slideDown();
				})
				$('.drop').on("mouseleave blur", function(){
					$('.submenu').stop().slideUp();
					$('.bg').stop().slideUp();
				})
				
				// hamburger menu on
			}else if(browserW <= 768) {
				$('.drop').off("mouseenter");
				$('.drop').off("mouseleave");
				$(".submenu").removeAttr('style');


				$('.drop').on("click", function() {
					$(this).find('.submenu').toggleClass('on2');
					$(this).toggleClass('active2');
				})
			}
		})

})

