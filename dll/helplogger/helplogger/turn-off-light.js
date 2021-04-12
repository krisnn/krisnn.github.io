//<![CDATA[
$(document).ready(function(){
$("#darkness").css("height", $(document).height()).hide();
$(".lightSwitcher").click(function(){
$("#darkness").toggle();
if ($("#darkness").is(":hidden"))
$(this).html("Turn off the lights").removeClass("turnedOff");
else
$(this).html("Turn on the lights").addClass("turnedOff");
});
});
//]]>