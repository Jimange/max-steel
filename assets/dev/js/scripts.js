
//-- JS DOCUMENT READY ------
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

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
    //-- CLOSEST POLYFILL --
    if (!Element.prototype.matches)
    {
    	Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;
	}

	if (!Element.prototype.closest) {
	    Element.prototype.closest = function(s) {
	        var el = this;
	        if (!document.documentElement.contains(el)) return null;
	        do {
	            if (el.matches(s)) return el;
	            el = el.parentElement || el.parentNode;
	        } while (el !== null && el.nodeType === 1); 
	        return null;
	    };
	}
	// }--EOF POLYFILL



function carouselSlider() {
	var arw = document.getElementsByClassName('arw');

	for (i=0; i<arw.length; i++)
	{
		arw[i].addEventListener('click',arwClicked,false);
	}

	function arwClicked(e)
	{
		var dir; 
		if (e.srcElement.parentNode.classList.contains('arw-r'))
			dir = 'right';
		else
			dir = 'left';

		var sliderCont = 		e.srcElement.closest('.slider--cont').id;
		var noOfSlides = 		document.querySelectorAll('#' + sliderCont + ' .slide').length;
		var currentSlide = 		document.querySelectorAll('#' + sliderCont + ' .slide--active');
		var currentSlideNo = 	currentSlide[0].dataset.slideNo;

		if (dir === 'right')
		{
			var nextSlideNo =		Number(currentSlideNo) + 1;
			if (nextSlideNo > noOfSlides) 
				nextSlideNo = 1;
			var nextSlide =			document.querySelectorAll('#' + sliderCont + ' .slide-' + nextSlideNo);	
		}
		else if (dir === 'left')
		{
			var nextSlideNo =		Number(currentSlideNo) - 1;
			if (nextSlideNo < 1) 
				nextSlideNo = noOfSlides;
			var nextSlide =			document.querySelectorAll('#' + sliderCont + ' .slide-' + nextSlideNo);
		}

		currentSlide[0].classList.remove('slide--active');
		nextSlide[0].classList.add('slide--active');

	}
}



ready(toTheMaxVid);
ready(carouselSlider);