var content = $("#content");
var contentHeight = parseFloat(content.height());

$(document).ready(function(){
    $(window).mousewheel( function(evt){
    	content.css("top", "+=" + evt.deltaY * evt.deltaFactor);
    	
    	// The top of the content
    	var top = parseFloat(content.css("top"));
    	var windowHeight = parseFloat($(window).height());
    	
    	// Check if the content is past the bottom of the screen.
    	var pastBottom = top - windowHeight;
    	if ( pastBottom > 0)
    		content.css("top", -contentHeight + pastBottom + "px");
    	
    	// Check if the content is above the top of the screen.
    	if (-top > contentHeight)
    		content.css("top", windowHeight + top + contentHeight + "px");
    		
    	
    });
});