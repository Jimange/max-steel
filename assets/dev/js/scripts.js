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



function carouselSlider() {
	var arw = $('.arw');
	for (i=0; i<arw.length; i++)
	{
		arw[i].addEventListener('click',arwClicked,false);
	}

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


//-- ON DOC READY FNCs -----------
$(document).ready(function()
{
	toTheMaxVid();
	carouselSlider();
});