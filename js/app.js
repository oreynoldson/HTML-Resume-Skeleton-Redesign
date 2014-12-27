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

	// $("#arrowDown_head").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".education").offset().top
	// 	}, 2000);
	// })

	// $("#arrowDown_edu").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".experience").offset().top
	// 	}, 2000);
	// })

	// $("#arrowDown_exp").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".achivements").offset().top
	// 	}, 2000);
	// })		

	// $("#arrowDown_ach").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".skills").offset().top
	// 	}, 2000);
	// })	

	// $("#arrowDown_skill").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".interests").offset().top
	// 	}, 2000);
	// })	

	// $("#arrowUp_int").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".head").offset().top
	// 	}, 3000);
	// })

	// /*Button Scrolling*/

	// $(".eduBtn").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".education").offset().top
	// 	}, 2000);
	// })

	// $(".expBtn").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".experience").offset().top
	// 	}, 2500);
	// })

	// $(".achBtn").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".achivements").offset().top
	// 	}, 2750);
	// })

	// $(".skilBtn").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".skills").offset().top
	// 	}, 3000);
	// })	

	// $(".intBtn").click(function(){

	// 	$("html, body").animate({
	// 		scrollTop: $(".interests").offset().top
	// 	}, 3250);
	// })	

});