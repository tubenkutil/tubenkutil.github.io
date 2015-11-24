$(function (){
	$('#js-toggle').click(function (event){
		event.preventDefault();
		
		$('body').toggleClass('show-nav');
		
		
	})
});