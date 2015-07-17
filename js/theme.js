// When the user clicks on the title, switch to the next theme.
var css_dir = "css/";
var themes = ["standard_theme.css", "retro_theme.css"];
var currentTheme = 0;

$("#main-section").on('click', '#title', function () {
	currentTheme = (currentTheme + 1) % themes.length;
	
	$("#theme").attr('href', css_dir + themes[currentTheme]);
	
	// Since we're interested in fun things, show the triangle to let the user know they can scroll
	$("#triangle-hint").addClass("pulse");
});