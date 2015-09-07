//세션유지
$(document).ready(function() {
	var email=window.sessionStorage.getItem('email');
	if(!email){
		$('#user_on').hide();
		$('#user_off').show();
	}else{
		if(window.sessionStorage.getItem('teacherReg')==0){
			$('#TeacherReg0').show();
			$('#TeacherReg1').hide();
		}else{
			$('#TeacherReg0').hide();
			$('#TeacherReg1').show();
		}
		$('#user_on').show();
		$('#user_off').hide();
	}
})

//