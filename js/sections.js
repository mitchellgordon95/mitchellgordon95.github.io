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


function showMain() {
	$("#menu-left h3").text("About")
	$("#menu-right h3").text("Portfolio");
	menuRight.show(); 
	menuLeft.show(); 
	mainSection.show();
	portfolioSection.hide();
	aboutSection.hide();
	mainSection.css('top', '');
	menuRight.css('top', '');
	menuLeft.css('top', '');
	location.hash = "";
}

function showAbout() {
	menuLeft.hide();
	menuRight.show(); 
	mainSection.hide();
	portfolioSection.hide();
	aboutSection.show();
	$("#menu-right h3").text("Home");
	location.hash = "about";
}

function showPortfolio () {
	menuRight.hide();
	menuLeft.show(); 
	mainSection.hide();
	aboutSection.hide();
	portfolioSection.show();
	$("#menu-left h3").text("Home");
	location.hash = "portfolio";
}

menuLeft.click(function () {
	if (currentSection === "main") {

		disableScroller();
		
		if (mainSection.css("position") == "static") {
			showAbout();
		}
		else {
			menuLeft.hide();
			menuRight.hide();
			mainSection.show();
			aboutSection.show();
			
			mainSection.css("-webkit-animation", "slide-out-right 1s ease-in-out forwards");
			mainSection.css("animation", "slide-out-right 1s ease-in-out forwards");
			
			aboutSection.css("-webkit-animation", "slide-in-right 1s ease-in-out forwards");
			aboutSection.css("animation", "slide-in-right 1s ease-in-out forwards");
			
			setTimeout(showAbout, 1000);
		}	
		
		currentSection = "about";
		
	}
	if(currentSection === "portfolio") {
		
		if (mainSection.css("position") == "static") {
			showMain();
		}
		else {
			menuLeft.hide();
			menuRight.hide();
			mainSection.show();
			portfolioSection.show();
			
			portfolioSection.css("-webkit-animation", "slide-out-right 1s ease-in-out forwards");
			portfolioSection.css("animation", "slide-out-right 1s ease-in-out forwards");
			
			mainSection.css("-webkit-animation", "slide-in-right 1s ease-in-out forwards");
			mainSection.css("animation", "slide-in-right 1s ease-in-out forwards");
			
			setTimeout(showMain, 1000);
		}	
		
		currentSection = "main";
		
		enableScroller();
	}
});

menuRight.click(function () {
	if (currentSection === "main") {

		disableScroller();
		
		
		if (mainSection.css("position") == "static") {
			showPortfolio();
		}
		else {
			menuLeft.hide();
			menuRight.hide();
			
			mainSection.show();
			portfolioSection.show();
			
			mainSection.css("-webkit-animation", "slide-out-left 1s ease-in-out forwards");
			mainSection.css("animation", "slide-out-left 1s ease-in-out forwards");
			
			portfolioSection.css("-webkit-animation", "slide-in-left 1s ease-in-out forwards");
			portfolioSection.css("animation", "slide-in-left 1s ease-in-out forwards");
			
			setTimeout(showPortfolio, 1000);
		}	
		
		currentSection = "portfolio";
	}
	if (currentSection === "about") {
		
		if (mainSection.css("position") == "static") {
			showMain();
		}
		else {
			menuLeft.hide();
			menuRight.hide();

			mainSection.show();
			aboutSection.show();
			
			aboutSection.css("-webkit-animation", "slide-out-left 1s ease-in-out forwards");
			aboutSection.css("animation", "slide-out-left 1s ease-in-out forwards");
			
			mainSection.css("-webkit-animation", "slide-in-left 1s ease-in-out forwards");
			mainSection.css("animation", "slide-in-left 1s ease-in-out forwards");
			
			setTimeout(showMain, 1000);
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