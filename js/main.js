 
 
 function recaptchaCallback() {
    $('#rtlme').removeAttr('disabled');
};



$(document).ready(function (){
	
	$('#rtlme').on('click',function(){
		
		if(grecaptcha && grecaptcha.getResponse().length > 0)
			{
				 
				 var me  = $('#ver').data('me');
				 var css  = $('#textarea').val();
				 var data = {me:me,css:css};
				
				 var jqxhr = $.post( "css.php",data, function(data) {
					  console.log( "success" );
					  console.log( data );
					  
					  $('#textarea').val(data);
					  
					})
					  .done(function() {
					//	console.log( "second success" );
					  })
					  .fail(function() {
					//	console.log( "error" );
					  })
					  .always(function() {
					//	console.log( "finished" );
					  });
				 
			}
			else
			{
				alert('Oops, you have to check the recaptcha !');
			}
		
		
	});
	
	
});