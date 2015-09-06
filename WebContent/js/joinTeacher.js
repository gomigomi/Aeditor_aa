$(function(){
	//load name and phone when load this page
	var name; var phone;
	var email = window.sessionStorage.getItem('email');
	$(document).ready(function() {
				
		$.ajax({
			url: '/Aeditor_aa/UseSession?type=1',
			method : 'get',
			dataType: 'json',
			data: {
				email : email
			},
			success: function(res){
				console.log(res.res.name);
				$('#JT-ReadOnly-name').val(res.res.name);
				$('#JT-ReadOnly-email').val(email);
				$('#JT-ReadOnly-phone').val(res.res.phone);
				
				name=$('#JT-ReadOnly-name').val();
				phone=$('#JT-ReadOnly-phone').val();
			},
			error: function(){}
	})
	})
	
	//1P
	var addr; var selfIntro;
	//2P
	var expYear; var expMonth; var licence; var expert; var major;
	var reqAge; var attitudeIntro;
	//3P
	var reqPay; var multiCare; var reqTime; var immContact;
	var monthlyWork;
	
	//라디오 요소처럼 동작시킬 체크박스 그룹 셀렉터
    $('input[type="checkbox"][name="agreement"]').click(function(){
        //클릭 이벤트 발생한 요소가 체크 상태인 경우
        if ($(this).prop('checked')) {
            //체크박스 그룹의 요소 전체를 체크 해제후 클릭한 요소 체크 상태지정
            $('input[type="checkbox"][name="agreement"]').prop('checked', false);
            $(this).prop('checked', true);
        }
    });
	
	$('#joinTeacher_next').click(function(){
		if($('#content1').is(":visible")){
			addr=$('#JT-addr').val();
			selfIntro=$('#self-intro').val();
			if(!addr){
				alert('주소를 입력 해 주세요!');
			}else if(!selfIntro){
				alert('자기소개를 입력해 주세요!');
			}else if(!$('input:checkbox[value="agree"]:checked').val()){
				alert('약관에 동의하지 않으셨네요!')
			}else{
				$('#content1').hide();
				$('#content2').show();
				console.log(addr);
				console.log(selfIntro);
			}
		}else if($('#content2').is(":visible")){
			expYear=$('input:text[name="exp-year"]').val();
			expMonth=$('input:text[name="exp-month"]').val();
			if($('input[type="checkbox"][value="licence"]:checked').val()){
				licence=true;
			}else{ licence=false; }
			if($('input[type="checkbox"][value="expert"]:checked').val()){
				expert=true;
			}else{ expert=false; }
			if($('input[type="checkbox"][value="major"]:checked').val()){
				major=true;
			}else{ major=false; }
			reqAge=$('#reqAge option:selected').val();
			attitudeIntro=$('#JT-attitudeIntro').val();
			if(!reqAge){
				alert('희망하는 대상 아동의 나이를 선택해주세요!');
			}else if(!attitudeIntro){
				alert('일일돌봄에 임할 자세를 써주세요!');
			}else{
				$('#content2').hide();
				$('#content3').show();
				console.log(expYear);
				console.log(expMonth);
				console.log(licence);
				console.log(expert);
				console.log(major);
				console.log(reqAge);
				console.log(attitudeIntro);
			}
		}else if($('#content3').is(":visible")){
			//3P
			//var immContact; var monthlyWork;
			reqPay=$('#reqPay option:selected').val();
			multiCare=$('input[type="radio"][name="multi-care"]').val();
			reqTime=$('#reqTime option:selected').val();
			immContact=$('input[type="radio"][name="JT-imm"]').val();
			monthlyWork=$('input[type="radio"][name="JT-monthly"]').val();
			if(!reqPay){
				alert('희망시급을 선택해주세요.');
			}else if(!reqTime){
				alert('최소 활동 시간을 지정해 주세요.');
			}else{
				$('#content3').hide();
				$('#content4').show();
				$('#joinTeacher_pagination').hide();
			
				var param = {
					//1P
					var addr; var selfIntro;
					//2P
					var expYear; var expMonth; var licence; var expert; var major;
					var reqAge; var attitudeIntro;
					//3P
					var reqPay; var multiCare; var reqTime; var immContact;
					var monthlyWork;
				}
				$.ajax({
					url: '/Aeditor_aa/User?type=3',
					method : 'post',
					dataType: 'json',
					data: {
						var param = {
							
						}
					},
					success: function(res){
						isExist=res;
					},
					error: function(){}
				});
			}
		}
	});
	
	$('#joinTeacher_back').click(function(){
		if($('#content1').is(":visible")){
			alert('첫번째 페이지 입니다!');
		}else if($('#content2').is(":visible")){
			$('#content2').hide();
			$('#content1').show();
		}else if($('#content3').is(":visible")){
			$('#content3').hide();
			$('#content2').show();
		}
	});
	
	$("#date-selectable").bind("mousedown", function(e) {
		  e.metaKey = true;
		}).selectable();

	
	
});