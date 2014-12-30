$(document).ready(function(){

	$(document).on("click", ".arrowDown, .arrowUp, .Btn", function(e){
		e.preventDefault();
		//where to scroll is stored as data in html
		var scrollToData = $(this).attr("data-sroll-to");
		//takes data in html and makes into a class
		var scrollTo = "." + scrollToData;
		//time of scroll animation
		var scrollTime = 2000;
		//animate variable
		var animate = $("html, body").animate({scrollTop: $(scrollTo).offset().top}, scrollTime);
	});
});