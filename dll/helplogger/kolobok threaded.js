/* Kolobok Emoticons For Blogger Threaded Comments
 * By Helplogger
 * Url: http://helplogger.blogspot.com
 */
a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') { 
_str = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://2.bp.blogspot.com/-Ph2wxEvy2mc/UTIr8-fdHjI/AAAAAAAABAo/3use2PsPhMA/s1600/taunt.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/=d&gt;/gi, "<img src='http://1.bp.blogspot.com/-8C5UH12mxf0/UTIzmsxczDI/AAAAAAAABDA/2seHdqLVQ6Q/s1600/suicide.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:d/gi, "<img src='http://4.bp.blogspot.com/-lhTywmMZ58E/UTI04kjJ3WI/AAAAAAAABDY/qNgtijEr_E8/s1600/biggrin.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:p/gi, "<img src='http://1.bp.blogspot.com/-gG_Wn6D6Ux4/UTIyqFyfKbI/AAAAAAAABCo/qEmU8s8ndVI/s1600/tongue.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:\(\(/gi, "<img src='http://3.bp.blogspot.com/-pcE-4ot-gjk/UTIsLRff6SI/AAAAAAAABAw/LYvZ8__88Ak/s1600/cry2.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:\)/gi, "<img src='http://4.bp.blogspot.com/-k4ujC23cSgI/UTIq7eUkmuI/AAAAAAAABAQ/YUNL9_RhDB0/s1600/smile3.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:\(/gi, "<img src='http://2.bp.blogspot.com/-XSBJ7zBZKZs/UTIrT-hMYyI/AAAAAAAABAY/6B26_8Ttwj4/s1600/sad.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:-\?/gi, "<img src='http://1.bp.blogspot.com/-TSIzPWeGBwk/UTI0S-nw5tI/AAAAAAAABDQ/xyHPCFZH4fI/s1600/think.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/d\(/gi, "<img src='http://3.bp.blogspot.com/-qlyn_deOhFw/UTIzY8aRgqI/AAAAAAAABC4/pfSojMdD33s/s1600/doh.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:-o/gi, "<img src='http://3.bp.blogspot.com/-Zb5g0OWHx4c/UTIsuPLt90I/AAAAAAAABA4/cmP1ltBmVF0/s1600/shock.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:-f/gi, "<img src='http://4.bp.blogspot.com/-SpvC8mHHwhg/UTIzQMUVGKI/AAAAAAAABCw/_NKKVyQtulk/s1600/flowers1.gif' alt='' class='smiley'/>");
_str = _str.replace(/:-ss/gi, "<img src='http://1.bp.blogspot.com/-qpnD1BYon5w/UTI0AIeKX6I/AAAAAAAABDI/HsllV7NYTqk/s1600/unsure.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/b-\(/gi, "<img src='http://3.bp.blogspot.com/-h4yNmhdKUVU/UTIwUKpvVOI/AAAAAAAABCY/B0FEZVRGHe4/s1600/threaten.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/h-\(/gi, "<img src='http://4.bp.blogspot.com/-veVoDPEc7I4/UTIv9wCS0jI/AAAAAAAABCQ/4c5FgCHAiU4/s1600/help.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/g-\)/gi, "<img src='http://2.bp.blogspot.com/-_ttAcnBbAaw/UTIvKtxfWvI/AAAAAAAABCA/X2JLEShhOQU/s1600/good.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/5-\p/gi, "<img src='http://2.bp.blogspot.com/--o9jZ1nMcec/UTIuyCBgS_I/AAAAAAAABB4/Jf03oz5yKrU/s1600/beee.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/y-\)/gi, "<img src='http://2.bp.blogspot.com/-6-BTJcVpwY0/UTIvhF_PL-I/AAAAAAAABCI/SS-LDADTSls/s1600/yahoo.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/c-\)/gi, "<img src='http://3.bp.blogspot.com/-khAwhIYbgvQ/UTItD_PfNyI/AAAAAAAABBI/HMpRMQh5Uak/s1600/crazy.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/s-\)/gi, "<img src='http://2.bp.blogspot.com/-fsTXhXl10Gg/UTIs7Ll01AI/AAAAAAAABBA/QkWgWAAFG3g/s1600/spiteful.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/d-\)/gi, "<img src='http://2.bp.blogspot.com/-CIuUuJeuyGI/UTIueHgTxOI/AAAAAAAABBo/BzXkTEEDlhw/s1600/drinks.gif' alt='' class='smiley'/>");
_str = _str.replace(/w-\)/gi, "<img src='http://2.bp.blogspot.com/-Mc5ed3Ymk7s/UTI1GIXMAMI/AAAAAAAABDg/PyDOfoXgsl0/s1600/cheer.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:-\h/gi, "<img src='http://2.bp.blogspot.com/-JOgaMRI61Jk/UTItsGc5KdI/AAAAAAAABBY/6UDCabfZQbg/s1600/hi+2.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:X/gi, "<img src='http://2.bp.blogspot.com/-wmOB_Z6LPp4/UTIt9FhZiwI/AAAAAAAABBg/7VoefgIQjEs/s1600/give_heart.gif' alt='' class='smiley'/>"); 
_str = _str.replace(/:\-\*/gi, "<img src='http://2.bp.blogspot.com/-H4e_O5BFVP8/UTIumwhVmKI/AAAAAAAABBw/SKhY4DDxKkk/s1600/air_kiss.gif' alt='' class='smiley'/>");
_str = _str.replace(/=\)\)/gi, "<img src='http://1.bp.blogspot.com/-lNNTReQVc0A/UTIrjDhVLAI/AAAAAAAABAg/BsVMYnr54pI/s1600/rofl.gif' alt='' class='smiley'/>");
b.item(i).innerHTML = _str; 
} 
} 
}