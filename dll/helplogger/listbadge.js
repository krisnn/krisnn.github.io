(function(){
var _1,_2="";
if(typeof (inPipe)!="undefined"){
_1=true;
}
for(var i=0;i<16;i++){
_2+=String.fromCharCode(Math.floor(Math.random()*26)+97);
}
window[_2]={};
if(_1){
pipeListBadge=window[_2];
}
var $=window[_2];
$.f=function(){
return {runFunction:[],timeoutCount:10,inpipe:(typeof (inPipe)!="undefined")?true:false,init:function(_5){
var _6=document.getElementsByTagName("SCRIPT");
for(var i=0;i<_6.length;i++){
var _8=(this.inpipe)?_6[i].id:_6[i].src;
if(_8.match(_5)){
$.a={};
if(_6[i].innerHTML){
$.a=$.f.parseJson(_6[i].innerHTML);
}
$.w=document.createElement("DIV");
_6[i].parentNode.insertBefore($.w,_6[i]);
_6[i].parentNode.removeChild(_6[i]);
$.f.buildStructure();
break;
}
}
},parseJson:function(_9){
this.parseJson.data=_9;
if(typeof _9!=="string"){
return {"err":"trying to parse a non-string JSON object"};
}
try{
var f=Function(["var document,top,self,window,parent,Number,Date,Object,Function,","Array,String,Math,RegExp,Image,ActiveXObject;","return (",_9.replace(/<\!--.+-->/gim,"").replace(/\bfunction\b/g,"function&shy;"),");"].join(""));
return f();
}
catch(e){
return {"err":"trouble parsing JSON object"};
}
},buildStructure:function(){
$.d={"title":"&nbsp;","height":"300px","width":"100%","border":"none","margin":"0","padding":"0","containerPadding":"0","evenBackgroundColor":"transparent","oddBackgroundColor":"transparent","pipesTitleFontSize":"inherit","pipesDescriptionFontSize":"12px","count":25};
var _b="";
if(this.inpipe){
$.d.width="100%";
$.d.height="100%";
$.a.count=25;
$.a.hideHeader="true";
}else{
_b="overflow:auto;overflow-x:hidden;";
var _c=document.getElementById("YUIcontainer");
if(_c==null){
$.f.createSSLink("http://yui.yahooapis.com/2.4.1/build/container/assets/container.css","YUIcontainer");
}
}
for(var k in $.d){
if($.a[k]===undefined){
$.a[k]=$.d[k];
}
}
$.w.className=_2;
if($.a.addClassName!==undefined){
try{
$.w.className+=" "+$.a.addClassName;
}
catch(eClassName){
}
}
if($.a.id!==undefined){
try{
$.w.id=$.a.id;
}
catch(eId){
}
}
if($.a.width!==undefined){
try{
if($.a.width.indexOf("px")==-1&&$.a.width.indexOf("%")==-1&&$.a.width.indexOf("em")==-1){
$.a.width=$.a.width+"px";
}
$.w.style.width=$.a.width;
}
catch(eWidth){
}
}
if($.a.height!==undefined){
try{
if($.a.height.indexOf("px")==-1&&$.a.height.indexOf("%")==-1&&$.a.height.indexOf("em")==-1){
$.a.height=$.a.height+"px";
}
}
catch(eHeight){
}
}
var ns=document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(ns);
if(!window.createPopup){
ns.appendChild(document.createTextNode(""));
}
var s=document.styleSheets[document.styleSheets.length-1];
var _10={"":"{zoom:1;position:"+$.a.position+";top:"+$.a.top+";left:"+$.a.left+";width:"+$.a.width+";height:"+$.a.height+";background-color:"+$.a.backgroundColor+";border:"+$.a.border+";font:"+$.a.font+";margin:"+$.a.margin+";padding:"+$.a.padding+";}","a":"{cursor:pointer;text-decoration:none;color:"+$.a.color+";}","a.yba":"{background:transparent url(http://3.bp.blogspot.com/-wsIqUGbMUyk/TchLsqCK3QI/AAAAAAAACmU/udeV22bGZ78/s400/blgo.png) 0 0 no-repeat;_background-image:url(http://l.yimg.com/a/i/us/pps/pipes-16.gif);float:left;height:16px;margin:5px 0 0 0px;width:16px;}","div.ybad":"{display:inline;height:16px;font-size:9px;font-weight:bold;line-height:22px;color:inherit;}","a.gt":"{position:absolute;height:16px;display:none;color:inherit;font-size:9px;font-weight:bold;line-height:22px;right:12px;cursor:pointer;text-decoration:underline;}","div.gts":"{position:absolute;height:16px;display:none;color:inherit;font-size:12px;font-weight:bold;line-height:20px;right:2px;cursor:none;text-decoration:none;}","a.ybaa":"{color:inherit;text-decoration:underline}","sup.ybas":"{font-size:100%;color:inherit}","a.ybt":"{font-weight:bold;color:"+$.a.headlineColor+";}","div.ybx":"{visibility:hidden;background-color:transparent;margin:"+$.a.containerPadding+";padding:0;position:relative;}","div.ybr":"{zoom:1;position:relative;display:block;font-size:1em;margin:3px 0 0 0;padding:0pt;width:100%;"+_b+"}","div.ybf":"{display:none;width:100%;background-color:transparent;height:20px;margin:0;padding:0;position:relative}","div.ybr li.ybi":"{background-color:"+$.a.evenBackgroundColor+";margin:0;padding:5px 5px 5px 0;list-style:none;list-style-position:outside;overflow:hidden;text-indent:0}","div.ybr li.ybi.odd":"{background-color:"+$.a.oddBackgroundColor+";}","h3.ybh":"{margin:0;padding:0;font-weight:bold;background-color:"+$.a.headerBackgroundColor+";}","h3.ybt":"{margin:0;padding:0;position:relative;}","div.PBajaxwait":"{position:relative;display:block;width:100%;height:100%;margin-top:-"+$.a.containerPadding+";background: #eee url('http://l.yimg.com/a/i/us/pps/logo_ani_1.gif') 50% 50% no-repeat;opacity:0.75;filter:alpha(opacity=75);}",".pipesImgdescription":"{display:block;width:100%;height:auto;color:"+$.a.descriptionColor+";}",".pipesImgdescription .pipesThumbnail":"{position:relative;float:left;background: url(http://4.bp.blogspot.com/-LOOjBWkPDOU/TcgzCKbFr1I/AAAAAAAACmE/RkFjOZVgkoU/s400/blogger.gif) no-repeat top center;border: 0px;height:72px;width:72px;overflow:hidden;margin: 0px 8px 0px 0px;}",".pipesImgdescription .pipesThumbnail img":"{position:static;width:82px;min-height:72px;border:0px solid #eee}",".pipesImgdescription .pipesTitle":"{font-size:"+$.a.pipesTitleFontSize+";font-weight:bold;padding-bottom:3px;width:100%;}",".pipesImgdescription .pipesDescription":"{font-size:"+$.a.pipesDescriptionFontSize+";}",".pipesHolder":"{padding:0px; margin:10px 0px 0px 0px;}",".pipesText":"{zoom:1;margin-left: 55px;}","ul":"{display:block;overflow:hidden;position:relative;width:300000px;z-index:2;padding:0;margin:auto;}","ul.pipesSmallthumb li":"{border:1px solid #eee;display:none;float:left;height:32px;list-style-image:none;list-style-position:outside;list-style-type:none;overflow:hidden;padding:2px;width:32px;}","ul.pipesSmallthumb li:hover":"{border:1px solid red;}","ul.pipesSmallthumb":"{margin: 10px 0 0;padding:0;width:auto;}","ul.pipesSmallthumb li a img":"{height:32px;width:32px;cursor:pointer;border: 0px;position:static;left:inherit;right:inherit;}",".ybf":"{display:none!important;}"};
var _11={"gin div.hd":"{background-color:#eee;border:none}"};
var _12="";
for(var r in _10){
var _14="."+_2+" "+r;
if(window.createPopup){
_12+=_14+_10[r];
}else{
var _15=document.createTextNode(_14+_10[r]);
ns.appendChild(_15);
}
}
for(var r in _11){
var _14="#"+_2+r;
if(window.createPopup){
_12+=_14+_11[r];
}else{
var _15=document.createTextNode(_14+_11[r]);
ns.appendChild(_15);
}
}
if(window.createPopup){
s.cssText=_12;
}
$.w.ajaxwait=document.createElement("DIV");
$.w.ajaxwait.className="PBajaxwait";
$.w.c=document.createElement("DIV");
$.w.c.className="ybx";
$.w.h=document.createElement("h3");
$.w.h.className="ybh";
if($.a.hideHeader!==undefined){
try{
$.w.h.style.display="none";
}
catch(eHideHeader){
}
}
$.w.t=document.createElement("A");
$.w.t.className="ybt";
$.w.t.innerHTML=$.a.title;
$.w.t.target="_blank";
$.w.h.appendChild($.w.t);
$.w.c.appendChild($.w.h);
$.w.r=document.createElement("DIV");
$.w.r.className="ybr";
$.w.c.appendChild($.w.r);
$.w.dtf=document.createElement("div");
$.w.dtf.className="ybf";
$.w.dtf.innerHTML="<a href=\"http://helplogger.blogspot.com\" class=\"yba\"></a> &nbsp;<div class=\"ybad\">Powered by <a class=\"ybaa\" href=\"http://helplogger.blogspot.com\">Helplogger</a><sup class=\"ybas\">e</sup></div><a class=\"gt\">Get This</a><div class=\"gts\">&#187;</div>";
var _16=$.w.dtf.getElementsByTagName("a");
this.getThisDiv=_16[2];
var _17=$.w.dtf.getElementsByTagName("div");
this.getThisDivArrow=_17[1];
$.w.ajaxwait.appendChild($.w.c);
$.w.ajaxwait.appendChild($.w.dtf);
$.w.appendChild($.w.ajaxwait);
if(!this.inpipe){
if($.a.localJson===undefined){
$.f.runSearch();
}else{
$.f.renderResult($.a.localJson);
}
}
},runCalledFromPipe:function(){
$.f.renderResult(jsondata);
},runSearch:function(){
$.f.callback="pipesCallback";
pipesCallback=function(r){
if(pipesCallBackArr[r.value.requesturl]){
for(var e=0;e<pipesCallBackArr[r.value.requesturl].length;e++){
if(pipesCallBackArr[r.value.requesturl][e]){
pipesCallBackArr[r.value.requesturl][e].f.renderResult(r);
pipesCallBackArr[r.value.requesturl][e]=null;
}
}
}
};
var _1a="http://pipes.yahoo.com/pipes/pipe.info?_id="+$.a.pipe_id;
var url="http://run.pipes.yahoo.com/pipes/pipe.run?_id="+$.a.pipe_id+"&_render=badge&_callback="+$.f.callback;
this.queryparams="";
for(var key in $.a.pipe_params){
if($.a.pipe_params[key]===null){
continue;
}
url+="&"+encodeURIComponent(key)+"="+encodeURIComponent($.a.pipe_params[key]);
this.queryparams+="&"+decodeURIComponent(key)+"="+decodeURIComponent($.a.pipe_params[key]);
}
$.w.t.href=_1a;
if(typeof (pipesCallBackArr)=="undefined"){
pipesCallBackArr=[];
}
if(typeof (pipesCallBackArr[url])=="undefined"){
pipesCallBackArr[url]=[];
}
pipesCallBackArr[url].push($);
if(typeof (YAHOO)=="undefined"||!YAHOO||typeof (YAHOO.util)=="undefined"||!YAHOO.util){
var _1d=document.getElementById("yui");
if(_1d==null){
$.f.runScript("http://yui.yahooapis.com/2.3.1/build/utilities/utilities.js","yui");
}
}
$.f.runScript(url,_2);
},renderResult:function(r){
if(r.value.published==""){
var t=$.w.h.cloneNode(true);
t.innerHTML=r.value.title;
$.w.h.parentNode.replaceChild(t,$.w.h);
$.w.h=t;
this.getThisDiv.style.display="none";
this.getThisDivArrow.style.display="none";
}else{
var t=$.w.t.cloneNode(true);
t.innerHTML=r.value.title;
$.w.t.parentNode.replaceChild(t,$.w.t);
$.w.t=t;
}
this.listbadge.init(r);
},runScript:function(url,id){
var s=document.createElement("script");
s.id=id;
s.type="text/javascript";
s.src=url;
document.getElementsByTagName("head")[0].appendChild(s);
},createSSLink:function(url,id){
var l=document.createElement("link");
l.id=id;
l.rel="stylesheet";
l.type="text/css";
l.href=url;
document.getElementsByTagName("head")[0].appendChild(l);
},removeScript:function(id){
if(document.getElementById(id)){
var s=document.getElementById(id);
s.parentNode.removeChild(s);
}
},getthisfuncInside:function(){
YAHOO.util.Dom.addClass(document.body,"yui-skin-sam");
var _28=(_1)?pid:$.a.pipe_id;
var _29=(_1)?"":$.f.queryparams;
if(this.getitnow==undefined){
this.getitnow=new YAHOO.widget.Panel(_2+"gin",{width:"420px",fixedcenter:true,constraintoviewport:true,underlay:"none",close:true,visible:false,draggable:true,modal:true,iframe:true,zIndex:"11111"});
this.getitnow.setHeader("<div style=\"border:none;font:bold 16px arial;color:#626262;text-align:left;padding-left:5px\">Get this Yahoo! Pipes<sup>&trade;</sup> Badge <div style=\"position:absolute;right:35px;letter-spacing:4px;top:3px;\"><a style=\"font-size:11px;color:#626262;\" href=\"http://pipes.yahoo.com/pipes/badgedocs\" target=\"_blank\">HELP</a></div></div>");
this.getitnow.setBody("<iframe width=\"415\" height=\"350\" allowtransparency=\"true\" marginwidth=\"0\" marginheight=\"0\" hspace=\"0\" vspace=\"0\" frameborder=\"0\" scrolling=\"no\" src=\"http://pipes.yahoo.com/pipes/badge.config?page=1&_btype=list&_id="+_28+_29+"\"></iframe>");
this.getitnow.render(document.body);
YAHOO.util.Event.addListener(_2+"ginClose","click",this.getitnow.hide,this.getitnow,true);
}
this.getitnow.show();
},getthisfuncOutside:function(){
var _2a=(_1)?pid:$.a.pipe_id;
var _2b=(_1)?"":$.f.queryparams;
var url="http://pipes.yahoo.com/pipes/badge.config?page=1&_btype=list&_id="+_2a+_2b;
window.open(url);
},listbadge:{init:function(r){
if(typeof (YAHOO)=="undefined"){
$.f.timeoutCount--;
if($.f.timeoutCount==0){
}else{
window.setTimeout(function(){
$.f.listbadge.init(r);
},1000);
}
return;
}
YAHOO.util.Dom.removeClass($.w.ajaxwait,"PBajaxwait");
if(!$.f.inpipe){
var _2e=document.getElementById("YUICscript");
if(_2e==null){
$.f.runScript("http://yui.yahooapis.com/2.4.1/build/container/container-min.js","YUICscript");
}
$.w.dtf.style.display="block";
if(r.value.published!=""){
this.checkViewport();
}
}
YAHOO.util.Event.addListener(window,"resize",this.resized,this,true);
var w=$.w.r.offsetWidth;
if(!$.f.inpipe){
var _30=(parseInt($.a.containerPadding,10)*2);
var h=$.w.offsetHeight-$.w.h.offsetHeight-$.w.dtf.offsetHeight-_30-5;
if(h>0){
$.w.r.style.height=h+"px";
}
}
this.w=w;
this.remove();
if(r&&r.value&&r.value.items&&r.value.items.length){
this.startnum=0;
this.orglen=r.value.items.length;
this.countby=$.a.count;
this.results=r;
var _32=(this.orglen<this.countby)?this.orglen:this.countby;
this.create(this.startnum,_32);
this.startnum=this.countby;
}else{
var t=$.w.r.cloneNode(true);
t.innerHTML="<h4>No results</h4>";
$.w.r.parentNode.replaceChild(t,$.w.r);
$.w.r=t;
}
YAHOO.util.Dom.setStyle($.w.c,"visibility","visible");
},checkViewport:function(){
YAHOO.util.Event.removeListener($.f.getThisDiv,"click");
if(YAHOO.util.Dom.getViewportWidth()>=422&&YAHOO.util.Dom.getViewportHeight()>=415){
YAHOO.util.Event.addListener($.f.getThisDiv,"click",$.f.getthisfuncInside,this,true);
}else{
YAHOO.util.Event.addListener($.f.getThisDiv,"click",$.f.getthisfuncOutside,this,true);
}
},resized:function(){
if(this.currheight!=document.documentElement.clientHeight&&this.currheight!=""){
this.checkViewport();
}
this.currheight=document.documentElement.clientHeight;
},createDescription:function(_34,_35){
var _36=(_34.smallimg==undefined)?"":"<img src='"+_34.smallimg+"' />";
var _37=(_35=="imgBadge")?"":"<div class='pipesThumbnail'>"+_36+"</div>";
var _38=(_36==""||_35=="imgBadge")?"style='margin-left:0px;'":"style='margin-left:55px;'";
var _39="<div class='pipesImgdescription'><div class='pipesHolder'>"+_37+"<div class='pipesText' "+_38+"><div class='pipesTitle'><a href='"+_34.link+"' target='_self'>"+_34.title+"</a></div><div class='pipesDescription'>"+_34.description+"</div><ul class='pipesSmallthumb'></ul></div></div></div>";
return _39;
},createDescThumbs:function(obj,w,_3c){
var _3d=obj.getElementsByTagName("ul");
this.smallthumbholder=_3d[0];
var ww=w-55;
this.smallitemimgcount=Math.round(ww/50);
var _3f="";
var _40=(this.smallitemimgcount>_3c.usethisimgarr.length)?_3c.usethisimgarr.length:this.smallitemimgcount;
for(var x=1;x<_40;x++){
_3f+="<li><a href="+_3c.usethisimgarr[x].url+" target='_blank'><img src='"+_3c.usethisimgarr[x].url+"'</a></li>";
}
if(_3f==""){
this.smallthumbholder.style.marginTop="0px";
}else{
var t=this.smallthumbholder.cloneNode(true);
t.innerHTML=_3f;
this.smallthumbholder.parentNode.replaceChild(t,this.smallthumbholder);
this.smallthumbholder=t;
var _43=this.smallthumbholder.getElementsByTagName("img");
this.thumbnails=_43;
for(i=0;i<_43.length;i++){
new this.makeGrow(_43[i]);
}
}
},makeGrow:function(img){
var _45=null;
var _46=img;
var _47,w,h;
var _4a=function(obj){
_47=YAHOO.util.Dom.getXY(_46);
w=parseInt(YAHOO.util.Dom.getStyle(_46,"width"));
h=parseInt(YAHOO.util.Dom.getStyle(_46,"height"));
_45=obj.cloneNode(false);
_45.style.position="absolute";
_45.style.width="32px";
_45.style.height="32px";
_45.style.top=_47[1]+"px";
_45.style.left=_47[0]+"px";
_45.style.zIndex="999";
_45.style.display="none";
_45.style.padding="2px";
_45.style.border="1px solid #eee";
_45.className="clonedSmallImg";
YAHOO.util.Event.addListener(_45,"mouseout");
document.body.appendChild(_45);
_4c();
};
var _4c=function(e){
if(_45==null){
_4a(_46);
return;
}
_45.style.display="inline";
var _4e=new YAHOO.util.Anim(_45,{width:{to:200},height:{to:200}},0.6,YAHOO.util.Easing.backOut);
var _4f=_4e.getEl();
_4e.onTween.subscribe(function(){
var nx=_47[0]-((_4f.offsetWidth-w)>>1);
var ny=_47[1]-((_4f.offsetHeight-h)>>1);
if(nx<0){
nx=0;
}
if(ny<0){
ny=0;
}
YAHOO.util.Dom.setXY(_4f,[nx,ny]);
});
_4e.animate();
$.f.listbadge.growAnim=_4e;
YAHOO.util.Event.addListener(_45,"mouseout",_52);
};
var _52=function(){
if($.f.listbadge.growAnim.isAnimated()==true){
window.setTimeout(function(){
_52();
},50);
return;
}
YAHOO.util.Event.removeListener(_45,"mouseout");
var _53=new YAHOO.util.Anim(_45,{width:{to:32},height:{to:32}},0.2);
var _54=_53.getEl();
_53.onTween.subscribe(function(){
var nx=_47[0]-((_54.offsetWidth-w)>>1);
var ny=_47[1]-((_54.offsetHeight-h)>>1);
if(nx<0){
nx=0;
}
if(ny<0){
ny=0;
}
YAHOO.util.Dom.setXY(_54,[nx,ny]);
});
_53.onComplete.subscribe(function(){
var _57=_53.getEl();
_57.style.display="none";
});
_53.animate();
};
YAHOO.util.Event.addListener(_46,"mouseover",_4c);
},remove:function(){
$.w.r.innerHTML="";
},create:function(_58,_59){
for(var i=_58;i<_59;i++){
var _5b=this.results.value.items[i];
var _5c=_5b.media.regular.length;
var _5d=_5b.media.thumbnails.length;
var _5e=(_5c>_5d)?_5b.media.regular:_5b.media.thumbnails;
_5b.usethisimgarr=_5e;
if(_5e.length!=0){
if(_5b.media.thumbnails.length!=0){
_5b.smallimg=_5b.media.thumbnails[0].url;
}else{
_5b.smallimg=_5e[0].url;
}
}
var li=document.createElement("LI");
this.li=li;
li.className="ybi";
if(i%2){
li.className+=" odd";
}
li.innerHTML=this.createDescription(_5b);
this.createDescThumbs(this.li,this.w,_5b);
var _60=li.getElementsByTagName("div")[2];
var _61=li.getElementsByTagName("div")[3];
var _62=li.getElementsByTagName("div")[4];
var _63=li.getElementsByTagName("div")[5];
if(_60.innerHTML!=""){
YAHOO.util.Dom.setStyle(_60,"margin-right","8px");
}
YAHOO.util.Dom.setStyle(_61,"margin-left","0px");
$.w.r.appendChild(li);
}
if($.f.inpipe){
if(this.orglen>_59||_58!=0){
this.pagDiv=document.createElement("div");
this.pagDiv.className="paginate";
}
if(this.orglen>_59){
var _64=document.createElement("a");
_64.innerHTML="Next >";
YAHOO.util.Event.addListener(_64,"click",this.next_pag,this,true);
this.pagDiv.appendChild(_64);
}
if(_58!=0){
var _65=document.createElement("a");
_65.innerHTML="< Prev";
if(this.orglen>_59){
_65.style.right="40px";
_65.style.position="absolute";
}else{
_65.style.right="";
_65.style.position="";
}
YAHOO.util.Event.addListener(_65,"click",this.prev_pag,this,true);
this.pagDiv.appendChild(_65);
}
if(this.orglen>_59||_58!=0){
$.w.r.appendChild(this.pagDiv);
this.pagDiv=null;
}
}
},prev_pag:function(){
this.remove();
var _66=this.startorg-this.countby;
var _67=_66+this.countby;
if(_67>=this.orglen){
_67=this.orglen;
}
this.create(_66,_67);
location.href="#";
this.startnum=_67;
this.startorg=_66;
},next_pag:function(){
this.remove();
var _68=this.startnum;
var _69=this.countby+_68;
if(_69>=this.orglen){
_69=this.orglen;
}
this.create(_68,_69);
location.href="#";
this.startnum=_69;
this.startorg=_68;
}}};
}();
var _6a=/listbadge.js$/;
var _6b=function(){
$.f.init(_6a);
};
if(_1){
_6b();
}else{
if(typeof window.addEventListener!=="undefined"){
if(window.opera){
_6b();
}else{
window.addEventListener("load",_6b,false);
}
}else{
if(typeof window.attachEvent!=="undefined"){
window.attachEvent("onload",_6b);
}
}
}
})();