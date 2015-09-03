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
	if(){}
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
	
$(function(){
	
	//회원가입
	$('#RegisterBtn').click(function(){		
		var name=$('#SignupName').val();
		var email=$('#SignupEmail').val();
		var pass=$('#SignupPass').val()
		var phone=$('#SignupPhone').val();
<<<<<<< HEAD
		//Search Email
		$.ajax({
			url: '/Aeditor_aa/User?type="searchEmail"',
			method : 'get',
			dataType: 'json',
			data: result,
			success: function(res){
				alert('이미 등록된 이메일입니다!');
			},
			error: function(){}
		});
=======
//		//중복검사
//		$.ajax({
//			url: '/Aeditor_aa/User?type="searchEmail"',
//			method : 'get',
//			dataType: 'json',
//			data: result,
//			success: function(res){
//				alert('회원가입이 완료되었습니다!');
//			},
//			error: function(){}
//		});
>>>>>>> 6f8e131295b65bbd90eb583d5a2378a8dbe10e3c
		if(!$('#SignupName').val()){
			alert('이름을 입력해주세요!');
		}
		else if(!$('#SignupEmail').val()){
			alert('이메일을 입력해주세요!');
		}
		else if(!$('#SignupPhone').val()){
			alert('폰번호를 입력해주세요!');
		}
		else if(!$('#SignupPass').val()){
			alert('비밀번호를 입력해주세요!');
		}
		else if($('#SignupPassConf').val()!=pass){
			alert('비밀번호가 다릅니다!');
		}
		else{
			var param={
					name: name,
					email: email,
					pass: pass,
					phone: phone
			}
			
			$.ajax({
				url: '/Aeditor_aa/User?type=1',
				method : 'post',
				dataType: 'json',
				data: param,
				success: function(res){
					alert('회원가입이 완료되었습니다!');
				},
				error: function(){}	
			});
		}
	});

	
	//로그인
	$('#LoginBtn').click(function(){
		var email=$('#LoginEmail').val();
		var pass=$('#LoginPass').val();
		
		$.ajax({
			url:'/Aeditor_aa/User?type=1',
			method : 'get',
			dataType: 'json',
			data: {
				email: email,
				pass: pass
			},
			success: function(res){
				alert('환영합니다!');
				window.sessionStorage.setItem('email',res);
				$('#logIn').modal('hide');
				$('#user_off').hide();
				$('#user_on').show();
			},
			error: function(){
				alert('로그인 실패');
			}
		})
	})
	$('#user_id').mouseover(function(){
	    $('#user_id_dropdown').slideDown();
	});
		
	$('#gotoParentMyPage').click(function(){
		window.location.href = "ParentMyPage.html";
	});
	$('#gotoTeacherMyPage').click(function(){
		window.location.href = "TeacherMyPage.html";
	});
	$('#gotoJoinTeacher').click(function(){
		window.location.href = "JoinTeacher.html";
	});
})});