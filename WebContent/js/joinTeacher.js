$(function(){
	$('#joinTeacher_next').click(function(){
		if($('#content1').is(":visible")){
			$('#content1').hide();
			$('#content2').show();
		}else if($('#content2').is(":visible")){
			$('#content2').hide();
			$('#content3').show();
		}else if($('#content3').is(":visible")){
			$('#content3').hide();
			$('#content4').show();
			$('#joinTeacher_pagination').hide();
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
	
//	$(document).ready(function(){  
//	    $('#JT_bg').css('height', $(window).height()); 
//	    $(window).resize(function() { 
//	        $('#JT_bg').css('height', $(window).height()); 
//	    }); 
//	});
});