$('#collapse-navbar').on('show.bs.collapse',function(){
	$('.topcasafina-banner').css('transform' , 'translate(-50%,20%');
});

$('#collapse-navbar').on('hide.bs.collapse',function(){
	$('.topcasafina-banner').css('transform' , 'translate(-50%,-50%');
});