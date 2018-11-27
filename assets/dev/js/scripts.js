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
		var thisSliderCont =	$(this).closest('.slider--cont').attr('id');
		var thisSlideNo =		$('#' + thisSliderCont + ' .slide--active').attr('data-slide-no');
		thisSlideNo = 			Number(thisSlideNo);
		var nextSlideNo;

		if (dir === "right")
			nextSlideNo = thisSlideNo + 1;
		else if (dir === "left")
			nextSlideNo = thisSlideNo -1;

		console.log(nextSlideNo);
	}
}


//-- ON DOC READY FNCs -----------
$(document).ready(function()
{
	toTheMaxVid();
	carouselSlider();
});