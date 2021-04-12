/* Yahoo! smileys For Blogger Comments
 * bY Helplogger
 * Url:http://helplogger.blogspot.com
 */
a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') {
			yho_b_smiley = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/O:-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-bd/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/113.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/7:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/2\):\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\)\]/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\;\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:D/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\;\;-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/7:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/47.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/~\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:x/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-\*/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/=\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-\S\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-\O/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/B-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\#:-\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\(:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/=\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-B/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/=\;/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-c/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-h/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-t/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/8-7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\I-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/8-\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\L-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-a/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-\$/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\[-\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\O\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/8-\}/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/2:-\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/=\P~/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-\?/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/#-o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/=\D7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\@-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\^o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-w/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\X\_\X/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/109.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:\!\!/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/110.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\\m\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/111.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:-q/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/112.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/\^\#\(\^/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/114.gif' alt='' class='yhosmiley'/>");
			yho_b_smiley = yho_b_smiley.replace(/:ar\!/ig, "<img src='http://l.yimg.com/a/i/us/msg/emoticons/pirate_2.gif' alt='' class='yhosmiley'/>")
			b.item(i).innerHTML = yho_b_smiley;
		}
	}
}
