

$(function(){
	$('#JoinParentsBtn').click(function(){
		
		var i=$('#Name').val();
		if(i==false){
			alert('write your name down!');
		}else{
		
		window.location='JoinParents.html';
		
		}
	
	})
	
	var name=$('NameTxt').val();
	var email=$('Email').val();
	var pass=$('Password').val()
	var phone=$('Phone1').val()+$('Phone2').val()+$('Phone3').val();
	
	$.ajax({
		url: '/User?type=1',
		method : 'post',
		dataType: 'jason',
		data:{
			name:name,
			email:email,
			pass:pass,
			phone:phone
		},
		success: function(res){
			alert('회원가입이 완료되었습니다!');
		},
		error: function(){}	
	});
	
})