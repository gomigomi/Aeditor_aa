$(function(){
	$('#logo').click(function(){
		location.reload();
	})
	$('#signup_btn').click(function(){
		if($('#main_view').css("display")=="block"){
			$('#main_view').hide();
			$('#fixed_top').css('position','relative');
			$('#logo_img').attr('src','img/logo_mint.png');
			$('#fixed_bottom').css('top','0');
		}
		$('#content_wrapper').load("JoinPage.html");
	});
	$('#login_btn').click(function(){
		if($('#main_view').css("display")=="block"){
			$('#main_view').hide();
			$('#fixed_top').css('position','relative');
			$('#logo_img').attr('src','img/logo_mint.png');
			$('#fixed_bottom').css('top','0');
		}
		$('#content_wrapper').load("LoginPage.html");
	});
	
	$('#datepicker').datepicker();
})