$(document).ready(function(){
	for (var i = 0; i < 16; i++){
		for (var y = 0; y < 16; y++){
			$('.container').append('<div class="block"></div>');
		};
	};
	
	$('.block').on('mouseenter', function(){
		$(this).addClass('entered');
	});
});