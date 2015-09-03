//로그인 체크
$(document).ready(function() {
	
//	var session = {
//		id : window.sessionStorage.getItem('id'),
//		name : window.sessionStorage.getItem('name')
//	};
//	var thumb = window.sessionStorage.getItem('thumb');
//	var pass = window.sessionStorage.getItem('pw');
	
	var email= window.sessionStorage.getItem('email');
	
	if(!email){
		
	}else{		
		$('#user_off').hide();
		
		$('#user_email').empty();
		$('#user_email').html(email);
		$('#user_on').show();
	}
	
	
	
});