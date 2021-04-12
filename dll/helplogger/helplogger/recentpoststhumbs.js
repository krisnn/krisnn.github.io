function showlatestpostswiththumbs(json) {
    document.write('<ul class="recent-posts-container">');
    for (var i = 0; i < posts_no; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var postsurl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                var commentstext = entry.link[k].title;
                var commentsurl = entry.link[k].href;
            }
            if (entry.link[k].rel == 'alternate') {
                postsurl = entry.link[k].href;
                break;
            }
        }
        var recenthumb;
        try {
            recenthumb = entry.media$thumbnail.url;
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                recenthumb = d;
            } else recenthumb = 'http://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png';
        }
        var postdate = entry.published.$t;
        var showyear = postdate.substring(0, 4);
        var showmonth = postdate.substring(5, 7);
        var showday = postdate.substring(8, 10);
        var monthnames = new Array();
        monthnames[1] = "Jan";
        monthnames[2] = "Feb";
        monthnames[3] = "Mar";
        monthnames[4] = "Apr";
        monthnames[5] = "May";
        monthnames[6] = "Jun";
        monthnames[7] = "Jul";
        monthnames[8] = "Aug";
        monthnames[9] = "Sep";
        monthnames[10] = "Oct";
        monthnames[11] = "Nov";
        monthnames[12] = "Dec";
        document.write('<li class="recent-posts-list">');
        if (showpoststhumbs == true)
            document.write('<a href="' + postsurl + '"><img class="recent-post-thumb" src="' + recenthumb + '"/></a>');
        document.write('<div class="recent-post-title"><a href="' + postsurl + '" target ="_top">' + posttitle + '</a></div>');
        if ("content" in entry) {
            var postcontent = entry.content.$t;
        } else
        if ("summary" in entry) {
            var postcontent = entry.summary.$t;
        } else var postcontent = "";
        var re = /<\S[^>]*>/g;
        postcontent = postcontent.replace(re, "");
        if (post_summary == true) {
            if (postcontent.length < summary_chars) {
                document.write(postcontent);
            } else {
                postcontent = postcontent.substring(0, summary_chars);
                var quoteEnd = postcontent.lastIndexOf(" ");
                postcontent = postcontent.substring(0, quoteEnd);
                document.write(postcontent + '...');
            }
        }
        var posts_details = '';
        var flag = 0;
        document.write('<br><div class="recent-posts-details">');
        if (posts_date == true) {
            posts_details = posts_details + monthnames[parseInt(showmonth, 10)] + ' ' + showday + ' ' + showyear;
            flag = 1;
        }
        if (readmorelink == true) {
            if (flag == 1) posts_details = posts_details + ' | ';
            posts_details = posts_details + '<a href="' + postsurl + '" class="url" target ="_top">Read more</a>';
            flag = 1;;
        }
        if (showcommentslink == true) {
            if (flag == 1) {
                posts_details = posts_details + ' <br> ';
            }
            if (commentstext == '1 Comments') commentstext = '1 Comment';
            if (commentstext == '0 Comments') commentstext = 'No Comments';
            commentstext = '<a href="' + commentsurl + '" target ="_top">' + commentstext + '</a>';
            posts_details = posts_details + commentstext;
            flag = 1;;
        }
        document.write(posts_details);
        document.write('</div>');
        document.write('</li>');
    }
    document.write('</ul>');
}