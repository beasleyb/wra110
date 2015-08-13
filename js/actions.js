$(function(){

	// Global Variables
	var $loadContainer	= $('#loadContainer'),
		$menu 			= $('.menu'),
		$indicator		= $('#location'),
		$man			= $('#man'),
		$legend			= $('#legend');

	// Menu click
	$menu.on('click', function(e){
		e.preventDefault();
		console.log('menu click');

		// Variables
		var target	 	= $(this).attr('target'),
			location 	= "{ "+$(this).text()+" }";
		console.log(target, location);

		if (location 	!= $indicator.text()){

			// Get page, fade out, empty, fade in
			$loadContainer.fadeOut(500, function(){
				$loadContainer.empty().load(target);
			}).fadeIn(500);

			// Change location indicator
			$indicator.fadeOut(500, function(){
			  $(this).text(location);
			}).fadeIn(500);
		}
	});

	// Paper click
	// $paper.on('click', function(){
		// console.log('paper click');

		// Variables
		// var target 		= $(this).attr('target'),
		// 	location 	= "{ "+$(this).attr('altText')+" }";
		// console.log(target, location);

		// Hide div, show target div
        // $('.papers').hide(500, function(){
        //     $(target).show(500);
        // });

        // Change location indicator
		// $indicator.fadeOut(500, function(){
		//   $(this).text(location);
		// }).fadeIn(500);
	// });

	// Subtitle fade in
	$man.fadeIn(1000, function(){
		$legend.fadeIn(1000);
	});
});