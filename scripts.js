$(document).ready(function(){
	//create 256 (16x16) divs by default
	for (var i = 0; i < 16; i++){
		for (var y = 0; y < 16; y++){
			$('.container').append('<div class="block"></div>');
		};
	};
	

	function greyOut(){
		//Grey out the blocks that your mouse passes enters
		$('.block').on('mouseenter', function(){
		$(this).addClass('entered');
	});
	}

	//Give form ability to take user input and create # of <div>s accordingly
	$('#input-button').on('click', function(){
		$(".block").remove();
		var $input = +$('#input-grid-size').val();
		//alert("input: " + $input + " " + typeof($input));
		if ($input > 0){
			for (var i = 0; i < $input; i++){
				for (var y = 0; y < $input; y++){
					$('.container').append('<div class="block"></div>');
				};
			};
		greyOut();
		}	
		else {
			for (var i = 0; i < 16; i++){
				for (var y = 0; y < 16; y++){
					$('.container').append('<div class="block"></div>');
				};
			};
		greyOut();
		}
	});

	//Give RESET button ability to reset
	$('#reset').on('click', function(){
		$('.entered').removeClass('entered');
	});

	//functions to always call when the document is ready
	greyOut();
	});