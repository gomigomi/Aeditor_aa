$(function(){
	$('#PMP_ACregisterBtn').click(function(){
		var param={
				email : window.sessionStorage.getItem('email'),
				name:$('#AC_name').val(),
				age:$('#AC_age').val(),
				school:$('#AC_school').val(),
				disease:$('#AC_disease').val(),
				like:$('#AC_like').val(),
				dislike:$('#AC_dislike').val(),
				character:$('#AC_character').val(),
				sisBro:$('#AC_sisbro').val(),
				extraReq:$('#AC_extraReq').val()	
		}
		if(!param.name){
			alert("이름을 입력해주세요!");
		}else if(!param.age){
			alert("자녀 나이를 입력해 주세요!");
		}else if(!param.school){
			alert("자녀가 다니는 학교를 입력해 주세요!");
		}else if(!param.like){
			alert("자녀가 좋아하는 것을 입력해주세요.");
		}else if(!param.dislike){
			alert("자녀가 싫어하는 것을 입력해 주세요.");
		}else if(!param.character){
			alert("자녀의 성격을 입력해 주세요.");
		}else if(!param.sisBro){
			alert("자녀의 형제 유무를 입력해주세요.");
		}else{
			
			console.log(param.email+param.name);
			$.ajax({
				url: '/Aeditor_aa/User?type=2',
				method : 'post',
				dataType: 'json',
				data: param,
				success: function(res){					
					alert('자녀 등록이 완료되었습니다.!');
				},
				error: function(){}	
			});
		}
	})
	
});