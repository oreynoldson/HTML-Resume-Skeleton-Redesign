$(document).ready(function(){

	$("#arrowDown_head").click(function(){

		$("html, body").animate({
			scrollTop: $(".education").offset().top
		}, 2000);
	})

	$("#arrowDown_edu").click(function(){

		$("html, body").animate({
			scrollTop: $(".experience").offset().top
		}, 2000);
	})

	$("#arrowDown_exp").click(function(){

		$("html, body").animate({
			scrollTop: $(".achivements").offset().top
		}, 2000);
	})		

	$("#arrowDown_ach").click(function(){

		$("html, body").animate({
			scrollTop: $(".skills").offset().top
		}, 2000);
	})	

	$("#arrowDown_skill").click(function(){

		$("html, body").animate({
			scrollTop: $(".interests").offset().top
		}, 2000);
	})	

	$("#arrowUp_int").click(function(){

		$("html, body").animate({
			scrollTop: $(".head").offset().top
		}, 3000);
	})


});