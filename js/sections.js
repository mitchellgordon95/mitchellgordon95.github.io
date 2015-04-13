var currentSection = "main";
var mainSection = $("#main-section");
var aboutSection = $("#about-section");
var portfolioSection = $("#portfolio-section");
var menuLeft = $("#menu-left");
var menuRight = $("#menu-right");

mainSection.show();
portfolioSection.hide();
aboutSection.hide();

// Left and right arrows trigger menu's.
$(document).keydown( function(evt) {
	if (evt.which == 37)
		menuLeft.trigger("click");
	else if (evt.which == 39)
		menuRight.trigger("click");	
});


menuLeft.click(function () {
	if (currentSection === "main") {

		disableScroller();
		
		menuLeft.hide();
		menuRight.hide();
		$("#menu-right h3").text("Home");
		
		if (mainSection.css("position") == "static") {
			mainSection.hide();
			aboutSection.show();
			menuRight.show();
		}
		else {
			mainSection.show();
			aboutSection.show();
			
			mainSection.css("-webkit-animation", "slide-out-right 1s ease-in-out forwards");
			mainSection.css("animation", "slide-out-right 1s ease-in-out forwards");
			
			aboutSection.css("-webkit-animation", "slide-in-right 1s ease-in-out forwards");
			aboutSection.css("animation", "slide-in-right 1s ease-in-out forwards");
			
			setTimeout(function () {
				menuRight.show(); 
				mainSection.hide();
				location.hash = "about";
			}, 1000);
		}	
		
		currentSection = "about";
		
	}
	if(currentSection === "portfolio") {
		menuLeft.hide();
		menuRight.hide();
		$("#menu-left h3").text("About")
		$("#menu-right h3").text("Portfolio");
		
		if (mainSection.css("position") == "static") {
			portfolioSection.hide();
			mainSection.show();
			menuRight.show();
			menuLeft.show();
		}
		else {
			mainSection.show();
			portfolioSection.show();
			
			portfolioSection.css("-webkit-animation", "slide-out-right 1s ease-in-out forwards");
			portfolioSection.css("animation", "slide-out-right 1s ease-in-out forwards");
			
			mainSection.css("-webkit-animation", "slide-in-right 1s ease-in-out forwards");
			mainSection.css("animation", "slide-in-right 1s ease-in-out forwards");
			
			setTimeout(function () {
				menuRight.show(); 
				menuLeft.show(); 
				portfolioSection.hide();
				location.hash = ""}, 1000);
		}	
		
		currentSection = "main";
		
		enableScroller();
	}
});

menuRight.click(function () {
	if (currentSection === "main") {

		disableScroller();
		
		menuLeft.hide();
		menuRight.hide();
		$("#menu-left h3").text("Home");
		
		if (mainSection.css("position") == "static") {
			mainSection.hide();
			portfolioSection.show();
			menuLeft.show();
		}
		else {
			mainSection.show();
			portfolioSection.show();
			
			mainSection.css("-webkit-animation", "slide-out-left 1s ease-in-out forwards");
			mainSection.css("animation", "slide-out-left 1s ease-in-out forwards");
			
			portfolioSection.css("-webkit-animation", "slide-in-left 1s ease-in-out forwards");
			portfolioSection.css("animation", "slide-in-left 1s ease-in-out forwards");
			
			setTimeout(function () {
				menuLeft.show(); 
				mainSection.hide();
				location.hash = "portfolio";
				}, 1000);
		}	
		
		currentSection = "portfolio";
	}
	if (currentSection === "about") {
		menuLeft.hide();
		menuRight.hide();
		$("#menu-left h3").text("About")
		$("#menu-right h3").text("Portfolio");
		
		if (mainSection.css("position") == "static") {
			aboutSection.hide();
			mainSection.show();
			menuRight.show();
			menuLeft.show();
		}
		else {
			mainSection.show();
			aboutSection.show();
			
			aboutSection.css("-webkit-animation", "slide-out-left 1s ease-in-out forwards");
			aboutSection.css("animation", "slide-out-left 1s ease-in-out forwards");
			
			mainSection.css("-webkit-animation", "slide-in-left 1s ease-in-out forwards");
			mainSection.css("animation", "slide-in-left 1s ease-in-out forwards");
			
			setTimeout(function () {
				menuRight.show(); 
				menuLeft.show(); 
				aboutSection.hide();
				location.hash = "";}, 1000);
		}	
		
		currentSection = "main";
		
		enableScroller();
	}
});

//Check the hash for the correct section
if (location.hash === "#about")
	menuLeft.trigger("click");
if (location.hash === "#portfolio")
	menuRight.trigger("click");