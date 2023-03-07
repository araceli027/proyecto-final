$(document).ready(function()
{
	$(window).scroll(function()
	{
		if($(this).scrollTop() > 100)
		{
			$('.ir-arriba').fadeIn('1000');
		}
		else
		{
			$('.ir-arriba').fadeOut('1000');
		}
	});

	$('.ir-arriba').click(function()
	{
		$('body, html').animate({
			scrollTop: 150
		},500);
	});

	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function(popoverTriggerEl)
	{
		return new bootstrap.Popover(popoverTriggerEl)
	});

});

