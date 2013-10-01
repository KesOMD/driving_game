$(document).ready(function() {
	
	changeCar();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		changeCar();
    });
    
	/* Next/prev and primary nav btn click handlers */
	/*
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    */
    /* Show/hide dot lav labels on hover */
    /*
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    */
});

/* Scroll the background layers */
function parallaxScroll()
{
	var scrolled = $(window).scrollTop();
	$('#invader-container1').css( 'top', ( 0 - ( scrolled * .75 ) ) + 'px');
	$('#invader-container2').css( 'top', ( 0 - ( scrolled * .5 ) ) + 'px');
	$('#popup-container').css( 'top', ( 0 - ( scrolled * .6 ) ) + 'px');
	$('#palm-container2').css( 'top', ( 0 - ( scrolled * .8 ) ) + 'px');
}

/* change the car image after every section */
function changeCar()
{
	var section1Top =  0;
	var section2Top = $('#d1').offset().top - 200;
	var section3Top = $('#d2').offset().top - 130;
	var section4Top = $('#d3').offset().top - 130;
	var section5Top = $('#d4').offset().top - 130;
	var section6Top = $('#d5').offset().top + 500;
	var section7Top = $('#d6').offset().top - 130;

	$('#main-car').removeClass('car1');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top)
	{
		$('#main-car').removeClass('car2');
		$('#main-car').addClass('car1');
	}
	else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top)
	{
		$('#main-car').removeClass('car1');
		$('#main-car').removeClass('car3');
		$('#main-car').addClass('car2');
	}
	else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top)
	{
		$('#main-car').removeClass('car2');
		$('#main-car').removeClass('car4');
		$('#main-car').addClass('car3');
	}
	else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top)
	{
		$('#main-car').removeClass('car3');
		$('#main-car').removeClass('car5');
		$('#main-car').addClass('car4');
	}
	else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top)
	{
		$('#main-car').removeClass('car4');
		$('#main-car').removeClass('car6');
		$('#main-car').addClass('car5');
	}
	else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top)
	{
		$('#main-car').removeClass('car5');
		$('#main-car').removeClass('car7');
		$('#main-car').addClass('car6');
	}
	else if ($(document).scrollTop() >= section7Top)
	{
		$('#main-car').removeClass('car6');
		$('#main-car').addClass('car7');
	}
}
