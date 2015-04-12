var $pics = $("#prof-pics img");
// Hide all the pictures except the first.
$pics.hide();
$currentPic = $pics.first();
$currentPic.show();

$("#prof-pics").click( function () {
	// Show the next image when clicked.
	$currentPic.hide();
	$currentPic = $currentPic.next();
	if ($currentPic.length == 0)
		$currentPic = $pics.first();
	
	$currentPic.show();
});

var timer = setInterval(function () { $("#prof-pics").trigger("click"); }, 4000);
