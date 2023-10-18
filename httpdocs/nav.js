
$(function(){


	function Amir()
	{
		$('#Erden').toggleClass('on');
		$('#Erden').removeClass('anime');
	}
		
	function Alan()
	{
		$('#Erden').toggleClass('anime');
	
		
	}	
	
	
	function Messi()
	{
		$('#OnOff').toggleClass('OnOff');
	
		
	}	
	$('#Mac').on('click', function(){
		Alan();
		setTimeout(Amir, 2000);	

	});
	$('#Mac').on('click', function(){		
		Messi();	

	});
	
	$('#Nikita').on('click', function(){		
		Messi();	

	});
	

	$('#Nikita').on('click', function(){		
		Alan();	
		setTimeout(Amir, 2000);	
		
	});


	
});