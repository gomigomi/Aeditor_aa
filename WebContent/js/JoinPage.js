

$(function(){
	$('#RegisterBtn').click(function(){		
		var name=$('#SignupName').val();
		var email=$('#SignupEmail').val();
		var pass=$('#SignupPass').val()
		var phone=$('#SignupPhone').val();
		
		if($('#SignupName').attr('checked',true)){
			alert('이름을 입력해주세요!');
		}
		else if($('#SignupEmail').attr('checked',true)){
			alert('이메일을 입력해주세요!');
		}
		else if($('#SignupPhone').attr('checked',true)){
			alert('폰번호를 입력해주세요!');
		}
		else if($('#SignupPass').attr('checked',true)){
			alert('비밀번호를 입력해주세요!');
		}
		else if($('#SignupPassConf').attr('checked',true)){
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
	})
})