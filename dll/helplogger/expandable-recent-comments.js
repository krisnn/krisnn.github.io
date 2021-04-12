var tgl=false;
var title_arr = new Array();
var arr=0;
var err = "[err]";
var icon_expand="http://4.bp.blogspot.com/-MxGZTemGwiI/UXqAWpaVj0I/AAAAAAAADTU/-hwcbgEiCEI/s1600/icon-plus.png";
var icon_collapse="http://1.bp.blogspot.com/-6nL3BgBD6pM/UXqAWZQJIBI/AAAAAAAADTQ/7IjUXA0avYU/s1600/icon-minus+copy.png";
var maxcomments=20;

function real_posttitle(postid) {
  for (var i=0; i < title_arr.length; i++) {
    if (title_arr[i][0] == postid) return title_arr[i][1];
  }  
  return err;
}

function showrecentposts(json) {
  var numposts = 999999;
  
  for (i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var postid;
    var title;

    if (i == json.feed.entry.length) break;
//    for (var k = 0; k < entry.link.length; k++) {
    for (var k = 0; k < 200; k++) {
      if (entry.link[k].rel == 'self') {
        postid = entry.link[k].href;
        postid = postid.substr(postid.lastIndexOf("/") + 1, 100);
      }
      if (entry.link[k].rel == 'alternate') {
        title = entry.link[k].title;
        break;
      }
    }
    title_arr[arr] = postid + "&#176;" + title;
    title_arr[arr] = title_arr[arr].split("&#176;");
    ++arr;
  }  
}

function unfold(el) {
  var comid=el.id.substr(8,10);
  if (el.src == icon_expand) {
    el.src=icon_collapse;
    document.getElementById("com_id" + comid).style.display="block";   
  } else {
    el.src=icon_expand;
    document.getElementById("com_id" + comid).style.display="none";   
  }
}

function unfold_all(el) {
try {
  for (var i = 0; i < maxcomments; i++) {
    document.getElementById("com_id" + i).style.display="block";
    document.getElementById("click_id"+i).src=icon_collapse;
  }
} catch(e) {;}
  el.value='Show all';
}

function fold_all(el) {
try {
  for (var i = 0; i < maxcomments; i++) {
    document.getElementById("com_id" + i).style.display="none";
    document.getElementById("click_id"+i).src=icon_expand;
  }
} catch(e) {;}
  el.value='Hide all';
}

function showrecentcomments(json) {
  var numcomments = 999999;
  var postid;
  var i=0;
  
  for (i = 0; i < numcomments; i++) {
    var entry = json.feed.entry[i];
    var alturl;
        var anonymous=false;

    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'self') {
        postid = entry.link[k].href.split("/");
        postid = postid[5];
      }
      if (entry.link[k].rel == 'alternate') {
        alturl = entry.link[k].href;
        break;
      }
    }

    //alturl = alturl.replace("#", "#comment-");
    var postlink = alturl.split("#");
    postlink = postlink[0];
    var linktext = postlink.split("/");
    linktext = linktext[5];
    linktext = linktext.split(".html");
    linktext = linktext[0];
    var profilelink = "";
    try { 
      profilelink = entry.author[0].uri.$t; 
      } catch(e) 
      { 
        anonymous=true;
      };
    
    var posttitle = real_posttitle(postid);
    if (posttitle == err) {
      posttitle = linktext.replace(/-/g," ");
    }
    var commentdate = entry.published.$t;
    var cdyear = commentdate.substring(0,4);
    var cdmonth = commentdate.substring(5,7);
    var cdday = commentdate.substring(8,10);
    var ctime = commentdate.substr(11,5);

    var monthnames = new Array();
    monthnames[1] = "january";
    monthnames[2] = "february";
    monthnames[3] = "march";
    monthnames[4] = "april";
    monthnames[5] = "may";
    monthnames[6] = "june";
    monthnames[7] = "july";
    monthnames[8] = "august";
    monthnames[9] = "september";
    monthnames[10] = "october";
    monthnames[11] = "november";
    monthnames[12] = "december";

    if ("content" in entry) {
      var comment = entry.content.$t;}
    else
    if ("summary" in entry) {
      var comment = entry.summary.$t;} else var comment = "";

        if (i < maxcomments) {
    if (tgl) {tgl=false;var cl="row-a";} else {tgl=true;var cl="row-b";}

    document.write('<div class="' + cl + ' row-div"><img id="click_id' + i);
        document.write('" style="cursor:pointer;" onclick="unfold(this);"');
        document.write('src="' + icon_expand + '" />&nbsp;');

        document.write('On ' + cdday + ' ' + monthnames[parseInt(cdmonth,10)] + ' ' + cdyear);
        document.write(', at ' + ctime + ', ');
    if (anonymous == false) { 
        document.write('<a href="' + profilelink + '">' + entry.author[0].name.$t + '</a> ');
        } else {
                document.write(entry.author[0].name.$t + ' ');
        }
    document.write('commented on <a href="' + alturl + '">' + posttitle + '</a>');

    document.write('</div>');
    
    document.write('<div class="comments1" id="com_id' + i + '" style="margin-left:1.3em;display:none;">'+comment+'<\/div>');
        } 
  }
  document.getElementById("numcom").innerHTML=i; 
  
}