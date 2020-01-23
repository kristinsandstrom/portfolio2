//resize mousemove
var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        
    };
	
	$win.resize(getWidth).mousemove(function(e) {


	    var xxx = Math.round(e.pageX/w * 1000);

	/*
	    $('h1').attr("style",  "font-variation-settings: 'wght'" + xxx );
		*/
		 $('p').attr("style",  "font-variation-settings: 'wght'" + xxx );
	    
	}).resize();