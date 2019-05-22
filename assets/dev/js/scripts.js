//-- ANIMATION FUNC FOR TO THE MAX --------
function toTheMaxVid() {
	var vidCont =		document.getElementById('to-the-max--cont');
	var vid = 			document.getElementById('max-video');
	vid.addEventListener('ended',showTxt,false);

	var maxTxtCont =	document.getElementById('to-the-max-txt--cont');
	var takeTxtCont =	document.getElementById('take-it-txt--cont');
	var takeTxt =		document.getElementById('to-the-max-txt--take');
	var itTxt =			document.getElementById('to-the-max-txt--it');
	var toTxt =			document.getElementById('to-the-max-txt--to');
	var theTxt =		document.getElementById('to-the-max-txt--the');
	var maxTxt =		document.getElementById('to-the-max-txt--max');

	var speed =			400;
    
    function showTxt(e) {
    	setTimeout(function() {
	        vidCont.style.display 		= 'none';
	        maxTxtCont.style.display 	= 'flex';
	        setTimeout(function() {
	        	itTxt.style.opacity =	1;
	        	setTimeout(function() {
	        		toTxt.style.opacity =	1;
		        	setTimeout(function() {
		        		theTxt.style.opacity =	1;
			        	setTimeout(function() {
			        		takeTxtCont.style.display =	'none';
			        		maxTxt.style.display =		'block';
			        		itTxt.style.opacity =		0;
			        		toTxt.style.opacity =		0;
			        		theTxt.style.opacity =		0;

				        	setTimeout(function()
				        	{
				        		maxTxt.style.display =	'none';
				        		maxTxtCont.style.display =	'none';
				        		vidCont.style.display = 'flex';
				        		takeTxtCont.style.display =	'block';
				        		vid.play();
				        	}, speed * 3);
			        	}, speed);
		        	}, speed);
	        	}, speed);
	        }, speed);
	    }, speed);
    }
}


//-- CAROUSEL LOGIC ---------------------

	//-- COLOR CHNAGE FNC -------
	function changeBgCol(targets,col) {
		for (item in targets)
			if (targets[item].classList)
				targets[item].className = "section--cont bg-toggle bg-" + col;
	}

	//-- IS VISIBLE -----
	$.fn.isInViewport = function() {
	    var elementTop = $(this).offset().top;
	    var elementBottom = elementTop + $(this).outerHeight();

	    var viewportTop = $(window).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();

	    return elementBottom > viewportTop && elementTop < viewportBottom;
	};



function carouselSlider() {
	var arw = $('.arw');
	for (i=0; i<arw.length; i++)
	{
		// arw[i].addEventListener('click',arwClicked,false);
		$(arw[i]).on('click', arwClicked);
	}

	function autoplaySlider()
	{
		function clickArw(trgt) {
			var arwClick = 	$(trgt).find('.arw-r'),
				arwHover = 	arwClick.filter(':hover').length,
				inView =	$(trgt).isInViewport();

			if (arwHover !== 1 && inView)
				arwClick.click();
		}
		var sliderConts = $('.slider--cont[data-slider="autoplay"]');
		for (i=0; i < sliderConts.length; i++)
		{
			setInterval(clickArw,16000,sliderConts[i]);
		}
	}

	autoplaySlider();

	function arwClicked()
	{
		var dir = 				$(this).attr('data-arw-dir');
		var thisSliderId =		$(this).closest('.slider--cont').attr('id');
		var slidesLength =		$('#' + thisSliderId + ' .slide').length;
		var thisSlideNo =		$('#' + thisSliderId + ' .slide--active').attr('data-slide-no');
		thisSlideNo = 			Number(thisSlideNo);
		var thisSlide =			$('#' + thisSliderId + ' .slide--active');
		var nextSlide;

		if (dir === "right")
		{
			nextSlide =	thisSlide.next('.slide');
			var prevSlide =	thisSlide.prev('.slide');

			thisSlide.addClass('slide--left');
			thisSlide.removeClass('slide--active');
			nextSlide.addClass('slide--active');

			var copySlideHtml = prevSlide.clone();
			copySlideHtml.removeClass('slide--left');
			$('#' + thisSliderId).append(copySlideHtml);
			prevSlide.remove();
		}
		else if (dir === "left")
		{
			nextSlide =	thisSlide.prev('.slide');
			var lastSlide =	thisSlide.siblings(':last');

			thisSlide.removeClass('slide--active');
			nextSlide.addClass('slide--active');
			nextSlide.removeClass('slide--left');

			var copySlideHtml = lastSlide.clone();
			copySlideHtml.addClass('slide--left');
			nextSlide.before(copySlideHtml);
			lastSlide.remove();
		}
	}
}

//-- HERO TXT CAROUSEL LOGIC --------------

function cycleTxt() {
	var thisSlide =	$('.hero-slide-txt--cont.active');
	var thisNo =	Number( thisSlide.attr('data-txt-no') );
	var nextNo =	thisNo + 1;
	if (thisNo === 3) nextNo = 1;
	var nextSlide = $('#hero-slide-txt-' + nextNo);

	thisSlide.removeClass('active');
	nextSlide.addClass('active');
}


//-- MOBILE NAV SHOW/HIDE ------------------

function showMobNav()
{
	$('nav#mob-nav').removeClass('hidden');
	$('#menu-link').removeClass('closed');
}

function hideMobNav()
{
	$('nav#mob-nav').addClass('hidden');
	$('#menu-link').addClass('closed');
}

//-- ON DOC READY FNCs -----------
$(document).ready(function()
{
	toTheMaxVid();
	carouselSlider();
	setInterval(cycleTxt,6000);

	$('#menu-link').on('click',function() {
		var isClosed = $(this).hasClass('closed');

		console.log(isClosed)

		if (isClosed)
			showMobNav();
		else
			hideMobNav();
	});
});