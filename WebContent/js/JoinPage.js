

$(function(){
	$('#RegisterBtn').click(function(){		
		var name=$('#SignupName').val();
		var email=$('#SignupEmail').val();
		var pass=$('#SignupPass').val()
		var phone=$('#SignupPhone').val();
		
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
	})
	
})