$("span.div3").mouseover(function(e){
	$("img.div3").show();
	$("img.div3").css("top", e.pageY);
	$("img.div3").css("left", e.pageX);

})

$("span.div3").mouseout(function(){
	$("img.div3").hide();

})	