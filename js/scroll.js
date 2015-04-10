var content = $("#content");
var contentHeight = parseFloat(content.height());
var triangleHint = $("#triangle-hint");
var allContentElms = $("#content *");
var hintHidden = false;
var scrollCount = 0;

// Scrolling can also be done with the arrow keys
$(document).keydown( function(evt) {
	if (evt.which == 38)
		handleScroll ({deltaY: 40, deltaFactor: 1});
	else if (evt.which == 40)
		handleScroll ({deltaY: -40, deltaFactor: 1});	
});

$(document).ready(function(){
    $(window).mousewheel( handleScroll );
});

function handleScroll (evt){
        if (!hintHidden)
                triangleHint.hide();
        
        content.css("top", "+=" + evt.deltaY * evt.deltaFactor);
        
        // The top of the content
        var top = parseFloat(content.css("top"));
        var windowHeight = parseFloat($(window).height());
        var buffer = windowHeight * 3;
        
        // Check if the content is past the bottom of the screen.
        var pastBottom = top - windowHeight;
        if ( pastBottom > buffer) {
                content.css("top", -contentHeight + (pastBottom - buffer) + "px");
                scrollCount--;
                doFunThings(scrollCount);
        }
        
        // Check if the content is above the top of the screen.
        if (-top - buffer > contentHeight) {
                content.css("top", windowHeight + (top + buffer) + contentHeight + "px");
                ++scrollCount;
                doFunThings(scrollCount);
        }
}

// Depending on how many times we've scrolled, do something fun
function doFunThings(count) {
	if ( count == 5 )
		allContentElms.css("color", "red");
	else if ( count == 6 )
		allContentElms.css("color", "#0f0");
	else if ( count == 7 )
		allContentElms.css("color", "blue");
	else if ( count == 13 ) {
		content.css("-webkit-animation",  "spin 250ms");
		content.css("-webkit-animation-iteration-count", "infinite");
		content.css("animation",  "spin 250ms");
		content.css("animation-iteration-count", "infinite");
	}
	else if (count == 15) {
		$("#content h1").text("Congrats! You win!");
		$("#content h3").text("for now...");
	}
	else {
		resetContent();
	}
}

function resetContent () {
	$("#content h1").text("Mitchell Gordon");
    $("#content h3").text("Vanderbilt CS 2016");
    allContentElms.css("color", "#000");
    content.css("-webkit-animation",  "");
    content.css("-webkit-animation-iteration-count", "");
    content.css("animation",  "");
    content.css("animation-iteration-count", "");
}