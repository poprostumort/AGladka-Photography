var number = Math.floor(Math.random()*5)+1;
	var timer1 = 0;
	var timer2  = 0;

	function setSlide(slidenr)
	{
		clearTimeout(timer1);
		clearTimeout(timer2);
		number = slidenr -1;

		fadeSlide();
		setTimeout("changeSlide()", 500)
	}
	function fadeSlide()
	{
		$("#slider").fadeOut(500);
	}

	function changeSlide()
	{
		number++; if(number>5){number=1}

		var plik ="<img src=\"slajdy/slajd"+number+".png\" />";

		document.getElementById("slider").innerHTML = plik;
		$("#slider").fadeIn(500);

		timer1 = setTimeout("changeSlide()", 5000);
		timer2 = setTimeout("fadeSlide()", 4500);
	}