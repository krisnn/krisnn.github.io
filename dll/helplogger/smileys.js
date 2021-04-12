//<![CDATA[

    function replaceText(){if(!document.getElementById){return;}

    bodyText = document.getElementById("emocomments");

    theText = bodyText.innerHTML;

    theText = theText.replace(/:\)/gi, "<img src='http://i1066.photobucket.com/albums/u408/Helplogger/icon_smile.gif'/>");

    theText = theText.replace(/:d/gi, "<img src='http://i1066.photobucket.com/albums/u408/Helplogger/icon_smile.gif'/>");

    theText = theText.replace(/:p/gi, "<img src='http://i1066.photobucket.com/albums/u408/Helplogger/icon_razz.gif'/>");

    theText = theText.replace(/:\(/gi, "<img src='http://i1066.photobucket.com/albums/u408/Helplogger/icon_sad.gif'/>");

    theText = theText.replace(/:-s/gi, "<img src='http://i1066.photobucket.com/albums/u408/Helplogger/icon_confused.gif'/>");

    theText = theText.replace(/;-\)/gi, "<img src='http://i1066.photobucket.com/albums/u408/Helplogger/icon_wink.gif'/>");

    bodyText.innerHTML = theText;

    }replaceText();

    //]]>