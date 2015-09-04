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
	$('#search_btn').click(function(){
		window.location.href = "SearchResult.html";
	});
	
	$('#datepicker').datepicker();
		
	$('#tags').autocomplete({
		source: availableTags
	});
	
$(function(){
	//드롭다운 메뉴
	$("#gnb > li").bind("mouseenter focusin", function() {
	    $(this).addClass("on").siblings().removeClass("on");
	});
	$("#gnb > li").bind("mouseleave focusout", function() {
	    $(this).removeClass("on");
	});
	//회원가입
	$('#RegisterBtn').click(function(){		
		var name=$('#SignupName').val();
		var email=$('#SignupEmail').val();
		var pass=$('#SignupPass').val()
		var phone=$('#SignupPhone').val();
		var isExist=false;
		$.ajax({
			url: '/Aeditor_aa/User?type=2',
			method : 'get',
			dataType: 'json',
			data: {
				email : email
			},
			success: function(res){
				isExist=res;
			},
			error: function(){}
		});
		if(isExist=true) {
			alert('이미 가입된 이메일입니다!');
		}
		else if(!$('#SignupName').val()){
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
				if(!res.res){
					alert('로그인 실패');
				}else{
					alert('환영합니다!');
					window.sessionStorage.setItem('email',res.res);
					$('#logIn').modal('hide');
					$('#user_off').hide();
					$('#user_email').html(res.res);
					$('#user_on').show();
				}
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
