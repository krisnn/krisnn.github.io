gapi.comments.render(&#39;google-comments&#39;, {
    href: window.location,
    width: &#39;550&#39;,
    first_party_property: &#39;BLOGGER&#39;,
    view_type: &#39;FILTERED_POSTMOD&#39;
});
$(&#39;#blogger-comments&#39;).click(function(){
	$(&#39;#gplus-container&#39;).css(&#39;display&#39;,&#39;none&#39;);
	$(&#39;#comments&#39;).css(&#39;display&#39;,&#39;block&#39;);
	$(&#39;#blogger-comments&#39;).addClass(&#39;comments-enabled&#39;);
	$(&#39;#plus-comments&#39;).removeClass(&#39;comments-enabled&#39;);
	$(&#39;#blogger-comments&#39;).attr(&#39;src&#39;,&#39;http://1.bp.blogspot.com/-GFT7OBcWNIg/VDEzdZ6CYgI/AAAAAAAAACc/u-IWsSHv6fo/s1600/blogger-enabled.png&#39;);
	$(&#39;#plus-comments&#39;).attr(&#39;src&#39;,&#39;http://4.bp.blogspot.com/-IBuKMq4H9O8/VDE3N3hphHI/AAAAAAAAAC0/3mwXcw5HJOk/s1600/google-plus-disabled.png&#39;);
});
$(&#39;#plus-comments&#39;).click(function(){
	$(&#39;#comments&#39;).css(&#39;display&#39;,&#39;none&#39;);
	$(&#39;#gplus-container&#39;).css(&#39;display&#39;,&#39;block&#39;);
	$(&#39;#blogger-comments&#39;).removeClass(&#39;comments-enabled&#39;);
	$(&#39;#plus-comments&#39;).addClass(&#39;comments-enabled&#39;);
	$(&#39;#blogger-comments&#39;).attr(&#39;src&#39;,&#39;http://1.bp.blogspot.com/-L3jkmqGR7yA/VDEzddhGcAI/AAAAAAAAACU/tl3lL4-WTuc/s1600/blogger-disabled.png&#39;);
	$(&#39;#plus-comments&#39;).attr(&#39;src&#39;,&#39;http://1.bp.blogspot.com/-x2nXyu6IH8c/VDE3N60akMI/AAAAAAAAAC4/0TeTpUzUEqA/s1600/google-plus-icon.png&#39;);
});
$(&#39;#blogger-comments&#39;).hover(
	function(){
		if (!$(&#39;#blogger-comments&#39;).hasClass(&#39;comments-enabled&#39;)){ $(&#39;#blogger-comments&#39;).attr(&#39;src&#39;,&#39;http://1.bp.blogspot.com/-GFT7OBcWNIg/VDEzdZ6CYgI/AAAAAAAAACc/u-IWsSHv6fo/s1600/blogger-enabled.png&#39;);} 
	}, 	function(){
		if (!$(&#39;#blogger-comments&#39;).hasClass(&#39;comments-enabled&#39;)){ $(&#39;#blogger-comments&#39;).attr(&#39;src&#39;,&#39;http://1.bp.blogspot.com/-L3jkmqGR7yA/VDEzddhGcAI/AAAAAAAAACU/tl3lL4-WTuc/s1600/blogger-disabled.png&#39;);} 
	}
);
$(&#39;#plus-comments&#39;).hover(
	function(){
		if (!$(&#39;#plus-comments&#39;).hasClass(&#39;comments-enabled&#39;)){ $(&#39;#plus-comments&#39;).attr(&#39;src&#39;,&#39;http://1.bp.blogspot.com/-x2nXyu6IH8c/VDE3N60akMI/AAAAAAAAAC4/0TeTpUzUEqA/s1600/google-plus-icon.png&#39;);} 
	}, 	function(){
		if (!$(&#39;#plus-comments&#39;).hasClass(&#39;comments-enabled&#39;)){ $(&#39;#plus-comments&#39;).attr(&#39;src&#39;,&#39;http://4.bp.blogspot.com/-IBuKMq4H9O8/VDE3N3hphHI/AAAAAAAAAC0/3mwXcw5HJOk/s1600/google-plus-disabled.png&#39;);} 
	}
);