var numRecentComments = 5;
var maxCommentChars = 67;
var trueAvatars = true;
var urlMyAvatar = 'http://4.bp.blogspot.com/-e_9fHyorlCQ/UtSMoKuNfTI/AAAAAAAAF3U/FOeMX487uSQ/s1600/no-avatar-large.png' + sizeAvatar;
var urlMyProfile = '';
var cropAvatar = true;
var sizeAvatar = 60;
var urlNoAvatar = "http://2.bp.blogspot.com/-GfFjD8etS2E/UTPve4mQdYI/AAAAAAAAC7k/gy0DVRlx4xM/s"+sizeAvatar+"/anonymous-Icon.jpg";
var urlAnoAvatar = 'http://2.bp.blogspot.com/-5nGzg5T-9qA/T6ZbL9JF0iI/AAAAAAAACF8/TvTnURwsNb0/s1600/anonymous3.png' + sizeAvatar;
var txtMore = 'more...';
var txtWrote = '';
var txtAnonymous = '';
var maxResultsComments = "";
var numPerPost = 2;
var maxPostTitleChars = 0;
var getTitles = true;
var maxResultsPosts = "";
var txtTooltip = 'On &quot;[title]&quot;';
var urlToTitle = {};
function replaceVars(text, user, title, date) {
text = text.replace('[user]', user);
text = text.replace('[date]', date.toLocaleDateString());
text = text.replace('[datetime]', date.toLocaleString());
text = text.replace('[time]', date.toLocaleTimeString());
text = text.replace('[title]', title.replace(/\"/g,'&quot;'));
var i = text.indexOf("[date ");
if(i > -1) {
var format = /\[date\s+(.+?)\]/.exec(text)[1];
if(format != '') {
var txtDate = format.replace(/yyyy/i, date.getFullYear());
txtDate = txtDate.replace(/yy/i, date.getFullYear().toString().slice(-2));
txtDate = txtDate.replace("MM", String("0"+(date.getMonth()+1)).slice(-2));
txtDate = txtDate.replace("mm", String("0"+date.getMinutes()).slice(-2));
txtDate = txtDate.replace("ss", String("0"+date.getSeconds()).slice(-2));
txtDate = txtDate.replace("dd", String("0"+date.getDate()).slice(-2));
//or: txtDate = txtDate.replace("dd", date.getDate());
txtDate = txtDate.replace("hh", String("0"+date.getHours()).slice(-2));
//or: txtDate = txtDate.replace("hh", date.getHours());
text = text.replace(/\[date\s+(.+?)\]/, txtDate)
}
}
return text;
}
if(urlMyProfile == "") {
var elements = document.getElementsByTagName("*");
var expr = /(^| )profile-link( |$)/;
for(var i=0 ; i<elements.length ; i++)
if(expr.test(elements[i].className)) {
urlMyProfile = elements[i].href;
break;
}
}
function getPostUrlsForComments(json) {
for(var i = 0 ; i < json.feed.entry.length ; i++ ) {
var entry = json.feed.entry[i];
for (var k = 0; k < entry.link.length; k++ ) {
if (entry.link[k].rel == 'alternate') {
href = entry.link[k].href;
break;
}
}
urlToTitle[href] = entry.title.$t;
}
}
function showRecentComments(json) {
var postHandled = {};
var j = 0;
if(numPerPost) {
while(numPerPost < numRecentComments) {
for(var i = 0 ; i < json.feed.entry.length ; i++ ) {
var entry = json.feed.entry[i]; if(entry.author[0].name.$t=="Admin") continue;
if(entry["thr$in-reply-to"]) {
if(!postHandled[entry["thr$in-reply-to"].href])
postHandled[entry["thr$in-reply-to"].href] = 1;
else
postHandled[entry["thr$in-reply-to"].href]++;
if(postHandled[entry["thr$in-reply-to"].href] <= numPerPost)
j++;
}
}
if(j >= numRecentComments)
break;
numPerPost++;
j = 0;
postHandled = {};
}
if(numRecentComments == numPerPost)
numPerPost = 0;
}
postHandled = {};
j = 0;
for(var i = 0 ; j < numRecentComments && i < json.feed.entry.length ; i++ ) {
var entry = json.feed.entry[i]; if(entry.author[0].name.$t=="Admin") continue;
if(numPerPost && postHandled[entry["thr$in-reply-to"].href] && postHandled[entry["thr$in-reply-to"].href] >= numPerPost)
continue;
if(entry["thr$in-reply-to"]) {
if(!postHandled[entry["thr$in-reply-to"].href])
postHandled[entry["thr$in-reply-to"].href] = 1;
else
postHandled[entry["thr$in-reply-to"].href]++;
j++;
var href='';
for (var k = 0; k < entry.link.length; k++ ) {
if (entry.link[k].rel == 'alternate') {
href = entry.link[k].href;
break;
}
}
if(href=='') {j--; continue; }
var hrefPost = href.split("?")[0];
var comment = "";
if("content" in entry) comment = entry.content.$t;
else comment = entry.summary.$t;
comment = comment.replace(/<br[^>]*>/ig, " ");
comment = comment.replace(/<\S[^>]*>/g, "");
var postTitle="-";
if(urlToTitle[hrefPost]) postTitle=urlToTitle[hrefPost];
else {
if(hrefPost.match(/\/([^/]*)\.html/)) postTitle = hrefPost.match(/\/([^/]*)\.html/)[1].replace(/_\d{2}$/, "");
postTitle = postTitle.replace(/-/g," ");
postTitle = postTitle[0].toUpperCase() + postTitle.slice(1);
}
if(maxPostTitleChars && postTitle.length > maxPostTitleChars) {
postTitle = postTitle.substring(0, maxPostTitleChars);
var indexBreak = postTitle.lastIndexOf(" ");
postTitle = postTitle.substring(0, indexBreak) + "...";
}

var authorName = entry.author[0].name.$t;
var authorUri = "";
if(entry.author[0].uri && entry.author[0].uri.$t != "")
authorUri = entry.author[0].uri.$t;
var avaimg = urlAnoAvatar;
var bloggerprofile = "http://www.blogger.com/profile/";
if(trueAvatars && entry.author[0].gd$image && entry.author[0].gd$image.src && authorUri.substr(0,bloggerprofile.length) == bloggerprofile)
avaimg = entry.author[0].gd$image.src;
else {
var parseurl = document.createElement('a');
if(authorUri != "") {
parseurl.href = authorUri;
avaimg = 'http://www.google.com/s2/favicons?domain=' + parseurl.hostname;
}
}
if(urlMyProfile != "" && authorUri == urlMyProfile && urlMyAvatar != "")
avaimg = urlMyAvatar;
if(avaimg == "http://4.bp.blogspot.com/-e_9fHyorlCQ/UtSMoKuNfTI/AAAAAAAAF3U/FOeMX487uSQ/s1600/no-avatar-large.png" && urlNoAvatar != "")
avaimg = urlNoAvatar;
var newsize="s"+sizeAvatar;
avaimg = avaimg.replace(/\/s\d\d+-c\//, "/"+newsize+"-c/");
if(cropAvatar) newsize+="-c";
avaimg = avaimg.replace(/\/s\d\d+(-c){0,1}\//, "/"+newsize+"/");
if(authorName == 'Anonymous' && txtAnonymous != '' && avaimg == urlAnoAvatar)
authorName = txtAnonymous;
var imgcode = '<img height="'+sizeAvatar+'" width="'+sizeAvatar+'" title="'+authorName+'" src="'+avaimg+'" />';
if (authorUri!="") imgcode = '<a href="'+authorUri+'">'+imgcode+'</a>';
var clsAdmin = "";
if(urlMyProfile != "" && authorUri == urlMyProfile)
clsAdmin = " rc-admin";
var datePart = entry.published.$t.match(/\d+/g); // assume ISO 8601
var cmtDate = new Date(datePart[0],datePart[1]-1,datePart[2],datePart[3],datePart[4],datePart[5]);

var txtHeader = txtWrote;
if(txtWrote.indexOf('[')==-1)
txtHeader = authorName + ' ' + txtWrote;
else
txtHeader = replaceVars(txtHeader, authorName, postTitle, cmtDate);

var tooltip = replaceVars(txtTooltip, authorName, postTitle, cmtDate);
if(!/#/.test(href)) href += "#comments";
document.write('<div title="'+tooltip+'" class="rc'+clsAdmin+'">');
document.write('<div title="'+tooltip+'" class="rc-header'+clsAdmin+'"><div title="'+tooltip+'" class="rc-ico'+clsAdmin+'">'+imgcode+'</div><a title="'+tooltip+'" href="' + href + '">' + txtHeader + ' </a></div>');
if(comment.length < maxCommentChars)
document.write('<div title="'+tooltip+'" class="rc-body'+clsAdmin+'">' + comment + '</div>');
else {
comment = comment.substring(0, maxCommentChars);
var indexBreak = comment.lastIndexOf(" ");
comment = comment.substring(0, indexBreak);
document.write('<div title="'+tooltip+'" class="rc-body'+clsAdmin+'">' + comment + '...</div>');
if(txtMore != "") {
var moretext = replaceVars(txtMore, authorName, postTitle, cmtDate);
document.write('<div title="'+tooltip+'" class="rc-footer'+clsAdmin+'"><a title="'+tooltip+'" href="' + href + '">' + moretext + '</a></div>');
}
}
document.write('<div style="clear:both;"></div></div>');
}
}
}
if(getTitles)
document.write('<script type="text/javascript" src="http://'+window.location.hostname+'/feeds/posts/summary?redirect=false'+maxResultsPosts+'&alt=json-in-script&callback=getPostUrlsForComments"></'+'script>');
document.write('<script type="text/javascript" src="http://'+window.location.hostname+'/feeds/comments/default?redirect=false'+maxResultsComments+'&alt=json-in-script&callback=showRecentComments"></'+'script>');