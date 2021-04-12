function formatItem(row) 
{
	return row[0];
}

function findValueOrigin(event,data) 
{ 
	$("#origin").val(data[0]); 
	$("#origin_code").val(data[1]);
		
	if($.trim(data[1])=='null') {
		$("#origin").val(''); 
		$("#origin_code").val('');
	} 
}

function findValueDestination(event,data) 
{ 
	$("#destination").val(data[0]); 	
	$("#destination_code").val(data[1]); 
	
	if($.trim(data[1])=='null')	{
		$("#destination").val(''); 
		$("#destination_code").val('');
	} 
}

function tariffValidate()
{	
	if($("#origin_code").val()=='') {
		$("#origin").focus();
		return false;	
	}	
	
	if($("#origin").val().length < 3) {
		$("#origin").focus();		
		$("#origin_code").val('');
		return false;	
	}
	
	if($("#destination_code").val()=='') {
		$("#destination").focus();	
		return false;
	}
	
	if($("#destination").val().length < 3) {
		$("#destination").focus();		
		$("#destination_code").val('');
		return false;	
	}	
}

$(function(){
	$("#weight").attr('autocomplete','off');	

	//origin
	$("#origin").autocomplete("contoh-1.php?ind=o",{
		minChars:3, 
		matchSubset:1, 
		matchContains:1, 
		max:20, 
		cacheLength:20, 
		formatItem:formatItem, 
		selectOnly:1, 
		autoFill:false, 
		cleanUrl:false, 
		multiple:true, 
		multipleSeparator:'|', 
		scroll:false
	});
	
	$("#origin").result(findValueOrigin).next().click(function(){});
	
	//destination
	$("#destination").autocomplete("contoh-1.php",{
		width:200,
		minChars:3, 
		matchSubset:1, 
		matchContains:1, 
		max:20, 
		cacheLength:20, 
		formatItem:formatItem, 
		selectOnly:1, 
		autoFill:false, 
		cleanUrl:false, 
		multiple:true, 
		multipleSeparator:'|', 
		scroll:false
	});
	
	$("#destination").result(findValueDestination).next().click(function(){	});

	
	$("#checktariff").click(function(){
		if($("#weight").val()=='')$("#weight").val(1);
		return tariffValidate();			
	});
			
});
