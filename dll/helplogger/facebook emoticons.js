/* Facebook Emoticons For Blogger Threaded Comments
 * By Helplogger
 * Url: http://helplogger.blogspot.com
 */
a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') { 
_str = b.item(i).innerHTML.replace(/:a/gi, "<img src='http://2.bp.blogspot.com/-vDMfzNS4LXk/Uq3VymzLtPI/AAAAAAAAFYY/-Q2Zkjb8OdY/s1600/angel.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:c/gi, "<img src='http://4.bp.blogspot.com/-xs3_-HrnMMA/Uq3VysNdYBI/AAAAAAAAFYQ/N0rislcdTHw/s1600/confused.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:b/gi, "<img src='http://3.bp.blogspot.com/-AkDZzXbA5Cs/Uq3Vyiwnz_I/AAAAAAAAFYU/uy3ZWsJqZWg/s1600/cry.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:l/gi, "<img src='http://1.bp.blogspot.com/-PlMxyWdCRb0/Uq3VzJanSQI/AAAAAAAAFYw/JHzJi6vGdOQ/s1600/curlylips.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:n/gi, "<img src='http://4.bp.blogspot.com/-94bDjgoahf8/Uq3Vza5JYQI/AAAAAAAAFYs/JDMxgCX6KWc/s1600/devil.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:f/gi, "<img src='http://4.bp.blogspot.com/-4TPkqTAFNSk/Uq3Vzf5og1I/AAAAAAAAFYo/3nFGMugluaE/s1600/frown.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:g/gi, "<img src='http://2.bp.blogspot.com/-hoaaC0xB0WI/Uq3V0IkYmpI/AAAAAAAAFZI/J7y6r8WHias/s1600/gasp.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:r/gi, "<img src='http://1.bp.blogspot.com/-oKhahzRRaIQ/Uq3V0b01YLI/AAAAAAAAFZE/OhitWe41YCE/s1600/glasses.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:d/gi, "<img src='http://4.bp.blogspot.com/-siOpRhzNSdc/Uq3V0prjmUI/AAAAAAAAFZA/AP1yhoZJZBQ/s1600/grin.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:y/gi, "<img src='http://4.bp.blogspot.com/-7YsY-lyoHl8/Uq3V4VkHz6I/AAAAAAAAFaI/6eCpQ-2L8Gs/s1600/grumpy.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:h/gi, "<img src='http://2.bp.blogspot.com/-peBw1yvryUo/Uq3V1l6pXhI/AAAAAAAAFZc/nYgJwpP1hgk/s1600/heart.png' alt='' class='smiley'/>");
_str = _str.replace(/:s/gi, "<img src='http://1.bp.blogspot.com/-G_fmylpuuJI/Uq3V1inMr5I/AAAAAAAAFZY/lytupJ2Z3cU/s1600/kiki.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:k/gi, "<img src='http://3.bp.blogspot.com/-mFjqh71W5uk/Uq3V2Wb132I/AAAAAAAAFZg/emFgvNGAers/s1600/kiss.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:t/gi, "<img src='http://4.bp.blogspot.com/-q5fwy86Ffd8/Uq3V2sEGk-I/AAAAAAAAFZ0/LNNCYys_TZ0/s1600/pacman.png' alt='' class='smiley'/>"); 
_str = _str.replace(/:p/gi, "<img src='http://3.bp.blogspot.com/-j44xFGDWpKc/Uq3V2_ZQgyI/AAAAAAAAFZw/DPwYe4HQHA4/s1600/tongue.png' alt='' class='smiley'/>"); 
_str = _str.replace(/;)/gi, "<img src='http://1.bp.blogspot.com/-iHr2Ky-aqkA/Uq3V3Z86OHI/AAAAAAAAFaE/DFaZSuQSln8/s1600/wink.png' alt='' class='smiley'/>")  
b.item(i).innerHTML = _str; 
} 
} 
}