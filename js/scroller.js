var content = $("#main-section, #menu-left, #menu-right, #main-section *");
var contentHeight = parseFloat(content.height());
var triangleHint = $("#triangle-hint");
var hintHidden = false;
var scrollCount = 0;
// Doesn't let the user scroll at all on the main page.
var scrollerDisabled = false;
// Doesn't let the user scroll past the middle of the screen.
var blockedBelow = false;
var blockedAbove = false;

enableScroller();

// Resets and disables the scroller
function disableScroller() {
	scrollerDisabled = true;
	resetContent();
	$("body").css("overflow", "");
	content.css("top", "40%");
	triangleHint.hide();
	hintHidden = true;
	scrollCount = 0;
	blockedAbove = false;
	blockedBelow = false;
}

function enableScroller() {
	$("body").css("overflow", "hidden");
	scrollerDisabled = false;
	triangleHint.css("display", "");
	hintHidden = false;
}

// Scrolling can also be done with the arrow keys
$(document).keydown( function(evt) {
	if (evt.which == 38)
		handleScroll ({deltaY: 120, deltaFactor: 1});
	else if (evt.which == 40)
		handleScroll ({deltaY: -120, deltaFactor: 1});	
});

$(document).ready(function(){
    $(window).mousewheel( handleScroll );
});

function handleScroll (evt){
	if (scrollerDisabled == true)
		return;

    if (!hintHidden)
        triangleHint.hide();
    
    var windowHeight = parseFloat($(window).height());
    
    // If there's a block at the midline, don't let the user scroll past it.
    var currentTop = parseFloat(content.css("top"));
    var nextTop = currentTop + evt.deltaY * evt.deltaFactor;
    var midline = windowHeight * 0.4;
    if (blockedAbove && evt.deltaY > 0 && nextTop > midline)
    	return;
    if (blockedBelow && evt.deltaY < 0 && nextTop < midline)
    	return;
    
    content.css("top", "+=" + evt.deltaY * evt.deltaFactor);
    
    // The top of the content
    var top = parseFloat(content.css("top"));
    var buffer = windowHeight;
    
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

	resetContent();
	
	if ( count == -7) {
		// Replace the main section with an angel version.
		$("#main-section").html(function (index, oldhtml) {
			return '<img src="img/Halo.png" id="halo"/><table><tr><td><img src="img/LeftWing.png" id="left-wing"/></td><td>' + oldhtml + '</td><td><img src="img/RightWing.png" id="right-wing"/></td> </tr></table>'
		});
		blockedAbove = true;
	}
	else if ( count == 1 )
		content.css("color", "red");
	else if ( count == 2 )
		content.css("color", "#0f0");
	else if ( count == 3 )
		content.css("color", "blue");
	else if ( count == 4 ) {
		resetContent();
		var sections = $("#main-section, #menu-left, #menu-right");
		sections.css("-webkit-animation",  "rainbow-spin 250ms");
		sections.css("-webkit-animation-iteration-count", "infinite");
		sections.css("animation",  "rainbow-spin 250ms");
		sections.css("animation-iteration-count", "infinite");
		blockedBelow = true;
	}
	else if (count == 15) {
		$("#title").text("Congrats! You win!");
		$("#tagline").text("for now...");
		blockedBelow = true;
	}
}

// Cache the default value of the sections.
var mainHTML = $("#main-section").html();
var leftHTML = $("#menu-left").html();
var rightHTML = $("#menu-right").html();

function resetContent () {
	$("#main-section").html(mainHTML);
	$("#menu-left").html(leftHTML);
	$("#menu-right").html(rightHTML);

    // Re-query content so it contains all the children of the main section
    content = $("#main-section, #menu-left, #menu-right, #main-section *");
	
	content.css("color", "");
    content.css("-webkit-animation",  "");
    content.css("-webkit-animation-iteration-count", "");
    content.css("animation",  "");
    content.css("animation-iteration-count", "");
    
    blockedBelow = blockedAbove = false;
    
}