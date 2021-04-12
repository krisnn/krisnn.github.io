$(function () { 
	var openspeed = 320;
	var closespeed = 320;
	$(&#39;.stack-navigation&gt;img&#39;).toggle(function(){
		var vertical = 0;
		var horizontal = 0;
		var $el=$(this);
		$el.next().children().each(function(){
			$(this).animate({top: &#39;-&#39; + vertical + &#39;px&#39;, left: horizontal + &#39;px&#39;}, openspeed);
			vertical = vertical + 58;
			horizontal = (horizontal+.72)*2;
		});
		$el.next().animate({top: &#39;-50px&#39;, left: &#39;10px&#39;}, openspeed).addClass(&#39;openstack-navigation&#39;)
		   .find(&#39;li a&gt;img&#39;).animate({width: &#39;50px&#39;, marginLeft: &#39;2px&#39;}, openspeed);
		$el.animate({paddingTop: &#39;0&#39;});
	}, function(){
		
		var $el=$(this);
		$el.next().removeClass(&#39;openstack-navigation&#39;).children(&#39;li&#39;).animate({top: &#39;55px&#39;, left: &#39;-10px&#39;}, closespeed);
		$el.next().find(&#39;li a&gt;img&#39;).animate({width: &#39;79px&#39;, marginLeft: &#39;0&#39;}, closespeed);
		$el.animate({paddingTop: &#39;35&#39;});
	});
	
	$(&#39;.stack-navigation li a&#39;).hover(function(){
		$(&quot;img&quot;,this).animate({width: &#39;56px&#39;}, 100);
		$(&quot;span&quot;,this).animate({marginRight: &#39;20px&#39;});
	},function(){
		$(&quot;img&quot;,this).animate({width: &#39;50px&#39;}, 100);
		$(&quot;span&quot;,this).animate({marginRight: &#39;0&#39;});
	});
});