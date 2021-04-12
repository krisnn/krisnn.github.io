function readpostlabels(json) {

    var entry, postimg, postcontent, cat;

    for (var i = 0; i < json.feed.entry.length; i++) {

        entry = json.feed.entry[i];

        if (i == json.feed.entry.length) {
            break;
        }

        relatedTitles[relatedTitlesNum] = entry.title.$t;

        postcontent = "";

        if ("content" in entry) {

            postcontent = entry.content.$t;

        } else if ("summary" in entry) {

            postcontent = entry.summary.$t;

        }

        relatedpSummary[relatedTitlesNum] = removetags(postcontent, relatedmaxnum);

        if ("media$thumbnail" in entry) {

            postimg = entry.media$thumbnail.url;

        } else {

            postimg = relatednoimage;

        }

        relatedThumb[relatedTitlesNum] = postimg;

        for (var k = 0; k < entry.link.length; k++) {

            if (entry.link[k].rel == 'alternate') {

                relatedUrls[relatedTitlesNum] = entry.link[k].href;

                break;

            }

        }

        relatedTitlesNum++;

    }

}

function showrelated() {

    var tmp = new Array(0);

    var tmp2 = new Array(0);

    var tmp3 = new Array(0);

    var tmp4 = new Array(0);

    for (var i = 0; i < relatedUrls.length; i++) {

        if (!contains(tmp, relatedUrls[i])) {

            tmp.length += 1;
            tmp[tmp.length - 1] = relatedUrls[i];

            tmp2.length += 1;
            tmp2[tmp2.length - 1] = relatedTitles[i];

            tmp3.length += 1;
            tmp3[tmp3.length - 1] = relatedpSummary[i];

            tmp4.length += 1;
            tmp4[tmp4.length - 1] = relatedThumb[i];

        }

    }

    relatedTitles = tmp2;
    relatedUrls = tmp;
    relatedpSummary = tmp3;
    relatedThumb = tmp4;

    for (var i = 0; i < relatedTitles.length; i++) {

        var index = Math.floor((relatedTitles.length - 1) * Math.random());

        var tempTitle = relatedTitles[i];
        var tempUrls = relatedUrls[i];

        var tempResum = relatedpSummary[i];
        var tempImage = relatedThumb[i];

        relatedTitles[i] = relatedTitles[index];
        relatedUrls[i] = relatedUrls[index];

        relatedpSummary[i] = relatedpSummary[index];
        relatedThumb[i] = relatedThumb[index];

        relatedTitles[index] = tempTitle;
        relatedUrls[index] = tempUrls;

        relatedpSummary[index] = tempResum;
        relatedThumb[index] = tempImage;

    }

    var somePosts = 0;

    var r = Math.floor((relatedTitles.length - 1) * Math.random());

    var relsump = r;

    var output;

    var dirURL = document.URL;

    while (somePosts < relatedPostsNum) {

        if (relatedUrls[r] != dirURL) {

            output = "<div class='relatedsumposts'>";

            output += "<a href='" + relatedUrls[r] + "' rel='nofollow'  target='_self' title='" + relatedTitles[r] + "'><img src='" + relatedThumb[r] + "' /></a>";

            output += "<h6><a href='" + relatedUrls[r] + "' target='_self'>" + relatedTitles[r] + "</a></h6>";

            output += "<p>" + relatedpSummary[r] + " ... </p>";

            output += "</div>";

            document.write(output);



            somePosts++;

            if (somePosts == relatedPostsNum) {
                break;
            }

        }

        if (r < relatedTitles.length - 1) {

            r++;

        } else {



            r = 0;

        }

        if (r == relsump) {
            break;
        }

    }

}

function removetags(text, length) {

    var pSummary = text.split("<");

    for (var i = 0; i < pSummary.length; i++) {

        if (pSummary[i].indexOf(">") != -1) {

            pSummary[i] = pSummary[i].substring(pSummary[i].indexOf(">") + 1, pSummary[i].length);

        }

    }

    pSummary = pSummary.join("");

    pSummary = pSummary.substring(0, length - 1);

    return pSummary;

}

function contains(a, e) {

    for (var j = 0; j < a.length; j++)
        if (a[j] == e) return true;

    return false;

}