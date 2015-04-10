var content = $("#content");
var contentHeight = parseFloat(content.height());
var triangleHint = $("#triangle-hint");
var hintHidden = false;

$(document).ready(function(){
    $(window).mousewheel( function(evt){
    	if (!hintHidden)
    		triangleHint.hide();
    	
    	content.css("top", "+=" + evt.deltaY * evt.deltaFactor);
    	
    	// The top of the content
    	var top = parseFloat(content.css("top"));
    	var windowHeight = parseFloat($(window).height());
    	var buffer = windowHeight * 3;
    	
    	// Check if the content is past the bottom of the screen.
    	var pastBottom = top - windowHeight;
    	if ( pastBottom > buffer)
    		content.css("top", -contentHeight + (pastBottom - buffer) + "px");
    	
    	// Check if the content is above the top of the screen.
    	if (-top - buffer > contentHeight)
    		content.css("top", windowHeight + (top + buffer) + contentHeight + "px");
    		
    	
    });
});