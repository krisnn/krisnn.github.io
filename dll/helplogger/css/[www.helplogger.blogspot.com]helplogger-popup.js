jQuery(document).ready(function() {
function helplogger_ppopup()  {
var hlwh = jQuery(window).height();
var hlpph = jQuery("#helploggerpopup").height();
var hlfromTop = jQuery(window).scrollTop()+50;
 jQuery("#helploggerpopup").css({"top":hlfromTop});
}jQuery(window)
.scroll(helplogger_ppopup)
.resize(helplogger_ppopup)
//alert(jQuery.cookie('sreqshown'));
//var hlww = jQuery(window).width();
//var hlppw = jQuery("#helploggerpopup").width();
//var hlleftm = (hlww-hlppw)/2;
var hlleftm = 500;
//var hlwh = jQuery(window).height();
//var hlpph = jQuery("#helploggerpopup").height();
//var hlfromTop = (jQuery(window).scrollTop()+hlwh-mdpph) / 2; 
jQuery("#helploggerpopup").animate({opacity: "1", left: "0" , left: hlleftm}, 0).show();        
jQuery("#hlclose").click(function() {
jQuery("#helploggerpopup").animate({opacity: "0", left: "-500"}, 1000).show(); });});