$(document).ready(function(){
	//create 256 (16x16) divs
	for (var i = 0; i < 16; i++){
		for (var y = 0; y < 16; y++){
			$('.container').append('<div class="block"></div>');
		};
	};
	
	//Grey out the blocks that your mouse passes enters
	$('.block').on('mouseenter', function(){
		$(this).addClass('entered');
	});

	//Give RESET button ability to reset
	$('button').on('click', function(){
		$('.entered').removeClass('entered');
	});
});