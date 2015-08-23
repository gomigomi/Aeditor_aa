$(function() {
    $("#RP_ChildSelectable" ).bind("mousedown",function(e){
    	e.metaKey=true;
    }).selectable();
    $('#RP_datepicker').datepicker();
    
    $('#RP_makeReservation').click(function(){
    	$('#RP_1page').hide();
    	$('#RP_1st').hide();
    	$('#RP_2page').show();
    	$('#RP_2nd').show();
    })
    
});