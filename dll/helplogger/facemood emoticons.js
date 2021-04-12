/* Facemood Emoticons For Blogger Threaded Comments
 * By Helplogger
 * Url: http://helplogger.blogspot.com
 */
a = document.getElementById('comments');
if(a) {
b = a.getElementsByTagName("DD");
for(i=0; i < b.length; i++) {
if (b.item(i).getAttribute('CLASS') == 'Author-comment-body' , 'comment-body') {
_str = b.item(i).innerHTML.replace(/:j/gi, "<img src='http://3.bp.blogspot.com/-XJUn74vJTwo/T67BrafHO3I/AAAAAAAACJk/B40nJjxUxNE/s1600/helplogger.blogspot.com(10).gif' alt='' class='smiley'/>");
_str = _str.replace(/:k/gi, "<img src='http://3.bp.blogspot.com/-JgARtAx7IHo/T67B2Db6LjI/AAAAAAAACJs/U1EWgczqOYY/s1600/helplogger.blogspot.com(11).gif' alt='' class='smiley'/>");
_str = _str.replace(/:l/gi, "<img src='http://2.bp.blogspot.com/--K1Z6RvN57w/T67CCzlaGcI/AAAAAAAACJ0/iF2-osmFALE/s1600/helplogger.blogspot.com(12).gif' alt='' class='smiley'/>");
_str = _str.replace(/:m/gi, "<img src='http://4.bp.blogspot.com/-c0DJDg4M2n4/T67CTf-xShI/AAAAAAAACJ8/BqUmJYoDBLI/s1600/helplogger.blogspot.com(13).gif' alt='' class='smiley'/>");
_str = _str.replace(/:n/gi, "<img src='http://1.bp.blogspot.com/-zrvYy6caFXM/T67CZi7etnI/AAAAAAAACKE/iPJsX_duWjE/s1600/helplogger.blogspot.com(15).gif' alt='' class='smiley'/>");
_str = _str.replace(/:o/gi, "<img src='http://3.bp.blogspot.com/-F2LUTd1hG_o/T67CfNLnIlI/AAAAAAAACKM/UHuPyigCX24/s1600/helplogger.blogspot.com(16).gif' alt='' class='smiley'/>");
_str = _str.replace(/:p/gi, "<img src='http://3.bp.blogspot.com/-Vd6U_2eq_Gk/T67CosaWm8I/AAAAAAAACKU/JgnYMS4AJOc/s1600/helplogger.blogspot.com(14).gif' alt='' class='smiley'/>");
_str = _str.replace(/:q/gi, "<img src='http://1.bp.blogspot.com/-faDYi6E_d6E/T67CybEuj1I/AAAAAAAACKc/nHxSH7KMSwY/s1600/helplogger.blogspot.com(17).gif' alt='' class='smiley'/>");
_str = _str.replace(/:r/gi, "<img src='http://2.bp.blogspot.com/-2QiwXpJ7gxk/T67C41ItlCI/AAAAAAAACKk/8sba1I9fZOY/s1600/helplogger.blogspot.com(18).gif' alt='' class='smiley'/>");
_str = _str.replace(/:s/gi, "<img src='http://2.bp.blogspot.com/-KUlSaDVWqW8/T67C_4ITH-I/AAAAAAAACKs/e6N7K2jJvl8/s1600/helplogger.blogspot.com(19).gif' alt='' class='smiley'/>");
_str = _str.replace(/:t/gi, "<img src='http://2.bp.blogspot.com/-UC_5gE8LgaQ/T67DGU12FBI/AAAAAAAACK0/oHA628PaDhk/s1600/helplogger.blogspot.com(20).gif' alt='' class='smiley'/>");
_str = _str.replace(/:a/gi, "<img src='http://1.bp.blogspot.com/-zY65UBxSl6w/T67AajI_U6I/AAAAAAAACIc/fCV19C1627Q/s1600/helplogger.blogspot.com(1).gif' alt='' class='smiley'/>");
_str = _str.replace(/:b/gi, "<img src='http://4.bp.blogspot.com/-M8aBZtLjGqY/T67Ai2d8eAI/AAAAAAAACIk/PrDerObloAw/s1600/helplogger.blogspot.com+(2).gif' alt='' class='smiley'/>");
_str = _str.replace(/:c/gi, "<img src='http://3.bp.blogspot.com/-HfIjCWOuxwo/T67Ar7HZiHI/AAAAAAAACIs/RgwvdPP4JSc/s1600/helplogger.blogspot.com(3).gif' alt='' class='smiley'/>");
_str = _str.replace(/:d/gi, "<img src='http://4.bp.blogspot.com/-98YuuiC8MIc/T67AzJ3Xf0I/AAAAAAAACI0/UtaFpgTb_PM/s1600/helplogger.blogspot.com(4).gif' alt='' class='smiley'/>");
_str = _str.replace(/:e/gi, "<img src='http://3.bp.blogspot.com/-ikCFMFesIrE/T67BAtTQGhI/AAAAAAAACI8/AisqU7R--Yc/s1600/helplogger.blogspot.com(5).gif' alt='' class='smiley'/>");
_str = _str.replace(/:f/gi, "<img src='http://2.bp.blogspot.com/-VSY5nbsSEIs/T67BK3G-B6I/AAAAAAAACJE/n_fhk-2Ihqc/s1600/helplogger.blogspot.com(6).gif' alt='' class='smiley'/>");
_str = _str.replace(/:g/gi, "<img src='http://3.bp.blogspot.com/-e9hytPNLXeY/T67BSj27JJI/AAAAAAAACJM/Rwonrid9oiQ/s1600/helplogger.blogspot.com(7).gif' alt='' class='smiley'/>");
_str = _str.replace(/:h/gi, "<img src='http://4.bp.blogspot.com/-mT-nqGFvXec/T67BZDPxvxI/AAAAAAAACJU/fgTPtQNxMK8/s1600/helplogger.blogspot.com(8).gif' alt='' class='smiley'/>");
_str = _str.replace(/:i/ig,"<img src='http://3.bp.blogspot.com/-xcMDAiCizIE/T67BfnBeWSI/AAAAAAAACJc/_OqmXLGhjLg/s1600/helplogger.blogspot.com(9).gif' alt='' class='smiley'/>")
b.item(i).innerHTML = _str;
}
}
}