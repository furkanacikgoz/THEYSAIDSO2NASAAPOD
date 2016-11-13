$( document ).ready(function() {


	var nasa_api_url = "https://api.nasa.gov/planetary/apod?api_key=I8rsT3XczUl8M6putWEE5JL9cYoGSaPi09x3hc3Z";
    $.ajax({
		url: nasa_api_url,
		success: function(result){
			if("copyright" in result) {
				$("#nasa_img_copyright").text("Copyright: " + result.copyright);
			}
			else {
				$("#nasa_img_copyright").text("Copyright: " + "Public Domain");
			}
			
			//$("#nasa_img_src").attr("src", result.url);
			console.log("url("+result.url+")");
			$("body").css( "background", "url("+result.url+")" );

		}
	});



});