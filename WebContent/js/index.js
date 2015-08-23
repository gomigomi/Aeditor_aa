var availableTags=[
	'강남구∣서울', '강동구∣서울', '강북구∣서울', '강서구∣서울',
	'관악구∣서울', '광진구∣서울', '구로구∣서울', '금천구∣서울',
	'노원구∣서울', '도봉구∣서울', '동대문구∣서울', '동작구∣서울',
	'마포구∣서울', '서대문구∣서울', '서초구∣서울', '성동구∣서울',
	'성북구∣서울', '송파구∣서울', '양천구∣서울', '영등포구∣서울',
	'용산구∣서울', '은평구∣서울', '종로구∣서울', '중구∣서울',
	'중랑구∣서울', 'hing'
];

$(function(){
	$('#logo').click(function(){
		location.reload();
	})
//	$('#signup_btn').click(function(){
//		if($('#main_view').css("display")=="block"){
//			$('#main_view').hide();
//			$('#fixed_top').css('position','relative');
//			$('#logo_img').attr('src','img/logo_mint.png');
//			$('#fixed_bottom').css('top','0');
//		}
//		$('#content_wrapper').load("JoinPage.html");
//	});
//	$('#login_btn').click(function(){
//		if($('#main_view').css("display")=="block"){
//			$('#main_view').hide();
//			$('#fixed_top').css('position','relative');
//			$('#logo_img').attr('src','img/logo_mint.png');
//			$('#fixed_bottom').css('top','0');
//		}
//		$('#content_wrapper').load("LoginPage.html");
//	});
	$('#search_btn').click(function(){
		window.location.href = "SearchResult.html";
	});
	
	$('#datepicker').datepicker();
		
	$('#tags').autocomplete({
		source: availableTags
	});
	
})