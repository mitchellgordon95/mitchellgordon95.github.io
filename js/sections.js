var currentSection = "main";
var mainSection = $("#main-section");
var aboutSection = $("#about-section");
var portfolioSection = $("#portfolio-section");
var menuLeft = $("#menu-left");
var leftLabel = $("#menu-left h3");
var menuRight = $("#menu-right");
var rightLabel = $("#menu-right h3");

menuLeft.click(function () {
	if (currentSection === "main") {
		mainSection.css("-webkit-animation", "slide-out-right 1s ease-in-out forwards");
		mainSection.css("animation", "slide-out-right 1s ease-in-out forwards");
		menuLeft.hide();
		menuRight.hide();
		rightLabel.text("Home");
		
		aboutSection.css("-webkit-animation", "slide-in-right 1s ease-in-out forwards");
		aboutSection.css("animation", "slide-in-right 1s ease-in-out forwards");
		aboutSection.show();
		currentSection = "about";
		
		setTimeout(function () {menuRight.show()}, 1000);
		
		// Disable the scroller
		disableScroller();
	}
	if(currentSection === "portfolio") {
		
	}
});

menuRight.click(function () {
	if (currentSection === "main") {
		
	}
	if (currentSection === "about") {
		
	}
})