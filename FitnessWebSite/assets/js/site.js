$(function() {"use strict";
	var stickOnScroll;
	$('#header').addClass('normal');
	//Choose Here Class Name (normal or fixed or intelligent);

	if ($(window).width() < 768) {
		$('.navbar-nav li').on('click', function() {
			$('.drop-down').slideUp();
			$(this).children('.drop-down').slideDown();
		});
	};

	if ($('#owl-slider1').length) {

		$("#owl-slider1").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 2,
			itemsDesktop : [1199, 2],
			itemsDesktopSmall : [979, 2],
			itemsMobile : [600, 1]

		});
	}
	if ($('#owl-slider2').length) {

		$("#owl-slider2").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds
			singleItem : true

		});
	}
	if ($('#owl-sucess-story').length) {

		$("#owl-sucess-story").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds
			singleItem : true,

		});
	}

	if ($('#owl-slider-hero').length) {

		$("#owl-slider-hero").owlCarousel({

			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay : 5000,
			singleItem : true

		});

		$('.slider-navigation').find('li').on('click',function() {
			$('.slider-navigation li').removeClass('active')
			$(this).addClass('active');

			var a = $(this).index();
			$("#owl-slider-hero").trigger('owl.goTo', a)
		});

		setInterval(function() {
			var i = $('#owl-slider-hero .owl-pagination .owl-page.active ').index();
			$('.slider-navigation li').removeClass('active')
			$('.slider-navigation li').eq(i).addClass('active');
		}, 1000);

	}
	if ($('#owl-blog').length) {

		$("#owl-blog").owlCarousel({

			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true,
			pagination : false

		});
	}

	if ($('#owl-schedule').length) {

		$("#owl-schedule").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 6,
			itemsDesktop : [1600, 5],
			itemsDesktopSmall : [1200, 4],
			itemsMobile : [600, 1]

		});
	}
	if ($('#owl-schedule-home-3').length) {

		$("#owl-schedule-home-3").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 3,
			itemsDesktop : [1600, 3],
			itemsDesktopSmall : [1200, 3],
			itemsMobile : [600, 1]

		});
	}

	if ($('#owl-trainers').length) {

		$("#owl-trainers").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 4,
			itemsDesktop : [1600, 3.5],
			itemsDesktopSmall : [1200, 3],
			itemsMobile : [600, 1]

		});
	}

	if ($('#owl-hthree-one').length) {
		$("#owl-hthree-one").owlCarousel({

			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true

		});
	}
	if ($('#owl-blog-details').length) {

		$("#owl-blog-details").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds
			navigation : true,
			pagination : false,
			navigationText : ["previous", "next"],

			items : 2,
			itemsDesktop : [1600, 2],
			itemsDesktopSmall : [1200, 2],
			itemsMobile : [600, 1]

		});
	}

	//=================Range Slider function ================
	if ($('#slider-meter').length) {
		$("#slider-meter").slider({
			range : true,
			min : 50,
			max : 100,
			values : [50, 81],
			slide : function(event, ui) {
				$("#amount").text("$" + ui.values[0] + " - ");
				$("#amount1").text("$" + ui.values[1]);
			}
		});

		$("#amount").text("$" + $("#slider-meter").slider("values", 0) + " - ");

		$("#amount1").text("$" + $("#slider-meter").slider("values", 1));

	}

	$('#header .nav ,.pagination li ').find('li').on('click', function() {
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
	});

	$('.open-info').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.item').addClass('open_slide');
	})

	$('.cross').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.item').removeClass('open_slide');
	})
	//==============Map Function
	if (jQuery('#custom_map').length) {

		var initialize = function() {
			//function initialize() {

			// var pos = new google.maps.LatLng(40.230589, 28.976449);
			var pos = new google.maps.LatLng(40.2209817, 28.9821911);
			
			var mapProp = {
				center : pos,
				zoom : 16,
				scrollwheel : false,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};

			var infowindow = new google.maps.InfoWindow({
				position : pos,
				content : '<div id="info">' + '<span class="head">İhsaniye Mah. Depo Yolu Sk. Fatih Kar-Ter Sitesi No: 4/B</span>' + '</div>'

			});

			var map = new google.maps.Map(document.getElementById("custom_map"), mapProp);

			infowindow.open(map);

		}

		google.maps.event.addDomListener(window, 'load', initialize);

	};

	//==============Map Function2
	if (jQuery('#custom_mapevent').length) {

		var initialize = function() {
			//function initialize() {
			var pos = new google.maps.LatLng(23.001452, 72.574112);

			var mapProp = {
				center : pos,
				zoom : 10,
				scrollwheel : false,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};

			var marker = new google.maps.Marker({
				position : pos,
				map : map,
				draggable : false,

			});

			var map = new google.maps.Map(document.getElementById("custom_mapevent"), mapProp);
			marker.setMap(map);
			infowindow.open(map, marker);

		}

		google.maps.event.addDomListener(window, 'load', initialize);

	};

	$(window).load(function() {
		//=================Header Style function================
		if ($('#header').hasClass('fixed')) {
			$('#header').next().addClass('top-m');
		}
		if ($('#header').hasClass('intelligent')) {
			$('#header').next().addClass('top-m');
		};
	});

	var class_pr = $('body').attr('class');
	var headerHeight = $('#header').outerHeight();
	var st = $(window).scrollTop();
	stickOnScroll = function() {

		if ($('#header').hasClass("intelligent")) {

			$('#header').removeClass('normal');
			$('#header').next().addClass('top-m');
			var pos = $(window).scrollTop();

			if (pos > headerHeight) {
				if (pos > st) {
					$('#header').addClass('simple')
					$('#header.simple').removeClass('down');
					$('#header.simple').addClass('fixed up');

				} else {
					$('#header.simple').removeClass('up');
					$('#header.simple').addClass('fixed down');

				}
				st = pos;

			} else {
				$('#header.simple').removeClass('fixed down up simple');
			}
			if (pos == $(document).height() - $(window).height()) {
				$('#header.simple').removeClass('up');
				$('#header.simple').addClass('fixed down');
			}

		} else if ($('body').hasClass("fix")) {

			$('#header').next().addClass('top-m');
			$('#header').addClass('simple fixed');
			$('#header').removeClass('down up');
			$('#wrapper').css({
				paddingTop : 0
			});
		} else {

			$('#header.simple').removeClass('fixed down up simple');
			$('#header').addClass('normal');
			//$('.spacetop').removeClass('top-m');
			$('#wrapper').css({
				paddingTop : 0
			});
		}
	};
	stickOnScroll();
	$(window).scroll(function() {
		stickOnScroll();
	});

	// end for sticky header
});
/* Increment And Decrement----ShopDetails*/
var count = 1;
$(".increment").on('click',function() {

	count++;

	$(".textVal").val(count);
});
$(".decrement").on('click',function() {
	count = $(".textVal").val();
	if (count != 0) {

		count--;
	}
	$(".textVal").val(count);
});

/* Increment And Decrement----ShoppingCart*/

var count = 1;
$(".increase1").on('click',function() {
	count++;
	$(".product-value1").val(count);
});
$(".decrease1").on('click',function() {
	count = $(".product-value1").val();
	if (count != 0) {
		count--;
	}
	$(".product-value1").val(count);
});
$(".increase2").on('click',function() {
	count++;
	$(".product-value2").val(count);
});
$(".decrease2").on('click',function() {
	count = $(".product-value2").val();
	if (count != 0) {
		count--;
	}
	$(".product-value2").val(count);
});

// Filltering.................
if ($('.main').length) {

	$container = $('.main').isotope({
		itemSelector : '.main-item',
		layoutMode : 'fitRows'
	})

	$('.dropdown-menu li').on('click',function() {

		var filterValue = "." + $(this).attr('class');
		$container.isotope({
			filter : filterValue
		});

	});
}

$(window).load(function() {
	$("#loading").delay(2000).fadeOut(500);

})

function popup(url) {
    var width = (screen.width) / 2;
    var height = (screen.height);
    var left = 0;
    var top = 0;
    var params = 'width=' + width + ', height=' + height;
    params += ', top=' + top + ', left=' + left;
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=yes';
    params += ', status=no';
    params += ', toolbar=no';
    newwin = window.open(url, 'pop', params);
    if (window.focus) {
        newwin.focus()
    }
    return false;
}


$(document).ready(function(){

	$('body').append('<div class="ccw_plugin chatbot" style="bottom:10px; right:10px;"><div class="style4 animated no-animation ccw-no-hover-an"><a target="_blank" href="https://api.whatsapp.com/send?phone=905435747910&amp;text=Merhaba" class="nofocus"><div class="chip ccw-analytics" id="style-4" data-ccw="style-4" style="color: rgba(0, 0, 0, 0.6); background-color: #e4e4e4;"><img class="ccw-analytics" id="s4-icon" data-ccw="style-4" src="assets/images/whatsapp-logo-32x32.png" alt="WhatsApp chat">WhatsApp Destek</div></a></div></div>');
});
// window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
// d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
// _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
// $.src="https://v2.zopim.com/?4hXE9AIfJ3H2HUwQP1KiioagdwM90Vrx";z.t=+new Date;$.
// type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-96758591-1', 'auto');
ga('send', 'pageview');