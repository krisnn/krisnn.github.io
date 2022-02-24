// EU Cookie
(function($) {

// for ie9 doesn't support debug console >>>
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
// ^^^

$.fn.euCookieLawPopup = (function() {

	var _self = this;

	///////////////////////////////////////////////////////////////////////////////////////////////
	// PARAMETERS (MODIFY THIS PART) //////////////////////////////////////////////////////////////
	_self.params = {
		cookiePolicyUrl : '/p/privacy-policy.html',
		popupPosition : 'top',
		colorStyle : 'default',
		compactStyle : false,
		popupTitle : 'This website is using cookies',
		popupText : 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on this website.',
		buttonContinueTitle : 'Continue',
		buttonLearnmoreTitle : 'Learn&nbsp;more',
		buttonLearnmoreOpenInNewWindow : true,
		agreementExpiresInDays : 30,
		autoAcceptCookiePolicy : false,
		htmlMarkup : null
	};

	///////////////////////////////////////////////////////////////////////////////////////////////
	// VARIABLES USED BY THE FUNCTION (DON'T MODIFY THIS PART) ////////////////////////////////////
	_self.vars = {
		INITIALISED : false,
		HTML_MARKUP : null,
		COOKIE_NAME : 'EU_COOKIE_LAW_CONSENT'
	};

	///////////////////////////////////////////////////////////////////////////////////////////////
	// PRIVATE FUNCTIONS FOR MANIPULATING DATA ////////////////////////////////////////////////////

	// Overwrite default parameters if any of those is present
	var parseParameters = function(object, markup, settings) {

		if (object) {
			var className = $(object).attr('class') ? $(object).attr('class') : '';
			if (className.indexOf('eupopup-top') > -1) {
				_self.params.popupPosition = 'top';
			}
			else if (className.indexOf('eupopup-fixedtop') > -1) {
				_self.params.popupPosition = 'fixedtop';
			}
			else if (className.indexOf('eupopup-bottomright') > -1) {
				_self.params.popupPosition = 'bottomright';
			}
			else if (className.indexOf('eupopup-bottomleft') > -1) {
				_self.params.popupPosition = 'bottomleft';
			}
			else if (className.indexOf('eupopup-bottom') > -1) {
				_self.params.popupPosition = 'bottom';
			}
			else if (className.indexOf('eupopup-block') > -1) {
				_self.params.popupPosition = 'block';
			}
			if (className.indexOf('eupopup-color-default') > -1) {
				_self.params.colorStyle = 'default';
			}
			else if (className.indexOf('eupopup-color-inverse') > -1) {
				_self.params.colorStyle = 'inverse';
			}
			if (className.indexOf('eupopup-style-compact') > -1) {
				_self.params.compactStyle = true;
			}
		}

		if (markup) {
			_self.params.htmlMarkup = markup;
		}

		if (settings) {
			if (typeof settings.cookiePolicyUrl !== 'undefined') {
				_self.params.cookiePolicyUrl = settings.cookiePolicyUrl;
			}
			if (typeof settings.popupPosition !== 'undefined') {
				_self.params.popupPosition = settings.popupPosition;
			}
			if (typeof settings.colorStyle !== 'undefined') {
				_self.params.colorStyle = settings.colorStyle;
			}
			if (typeof settings.popupTitle !== 'undefined') {
				_self.params.popupTitle = settings.popupTitle;
			}
			if (typeof settings.popupText !== 'undefined') {
				_self.params.popupText = settings.popupText;
			}
			if (typeof settings.buttonContinueTitle !== 'undefined') {
				_self.params.buttonContinueTitle = settings.buttonContinueTitle;
			}
			if (typeof settings.buttonLearnmoreTitle !== 'undefined') {
				_self.params.buttonLearnmoreTitle = settings.buttonLearnmoreTitle;
			}
			if (typeof settings.buttonLearnmoreOpenInNewWindow !== 'undefined') {
				_self.params.buttonLearnmoreOpenInNewWindow = settings.buttonLearnmoreOpenInNewWindow;
			}
			if (typeof settings.agreementExpiresInDays !== 'undefined') {
				_self.params.agreementExpiresInDays = settings.agreementExpiresInDays;
			}
			if (typeof settings.autoAcceptCookiePolicy !== 'undefined') {
				_self.params.autoAcceptCookiePolicy = settings.autoAcceptCookiePolicy;
			}
			if (typeof settings.htmlMarkup !== 'undefined') {
				_self.params.htmlMarkup = settings.htmlMarkup;
			}
		}

	};

	var createHtmlMarkup = function() {

		if (_self.params.htmlMarkup) {
			return _self.params.htmlMarkup;
		}

		var html =
			'<div class="eupopup-container' +
			    ' eupopup-container-' + _self.params.popupPosition +
			    (_self.params.compactStyle ? ' eupopup-style-compact' : '') +
				' eupopup-color-' + _self.params.colorStyle + '">' +
				'<div class="eupopup-head">' + _self.params.popupTitle + '</div>' +
				'<div class="eupopup-body">' + _self.params.popupText + '</div>' +
				'<div class="eupopup-buttons">' +
				  '<a href="#" class="eupopup-button eupopup-button_1">' + _self.params.buttonContinueTitle + '</a>' +
				  '<a href="' + _self.params.cookiePolicyUrl + '"' +
				 	(_self.params.buttonLearnmoreOpenInNewWindow ? ' target=_blank ' : '') +
					' class="eupopup-button eupopup-button_2">' + _self.params.buttonLearnmoreTitle + '</a>' +
				  '<div class="clearfix"></div>' +
				'</div>' +
				'<a href="#" class="eupopup-closebutton">x</a>' +
			'</div>';

		return html;
	};

	// Storing the consent in a cookie
	var setUserAcceptsCookies = function(consent) {
		var d = new Date();
		var expiresInDays = _self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
		d.setTime( d.getTime() + expiresInDays );
		var expires = "expires=" + d.toGMTString();
		document.cookie = _self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";

		$(document).trigger("user_cookie_consent_changed", {'consent' : consent});
	};

	// Let's see if we have a consent cookie already
	var userAlreadyAcceptedCookies = function() {
		var userAcceptedCookies = false;
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var c = cookies[i].trim();
			if (c.indexOf(_self.vars.COOKIE_NAME) == 0) {
				userAcceptedCookies = c.substring(_self.vars.COOKIE_NAME.length + 1, c.length);
			}
		}

		return userAcceptedCookies;
	};

	var hideContainer = function() {
		// $('.eupopup-container').slideUp(200);
		$('.eupopup-container').animate({
			opacity: 0,
			height: 0
		}, 200, function() {
			$('.eupopup-container').hide(0);
		});
	};

	///////////////////////////////////////////////////////////////////////////////////////////////
	// PUBLIC FUNCTIONS  //////////////////////////////////////////////////////////////////////////
	var publicfunc = {

		// INITIALIZE EU COOKIE LAW POPUP /////////////////////////////////////////////////////////
		init : function(settings) {

			parseParameters(
				$(".eupopup").first(),
				$(".eupopup-markup").html(),
				settings);

			// No need to display this if user already accepted the policy
			if (userAlreadyAcceptedCookies()) {
        $(document).trigger("user_cookie_already_accepted", {'consent': true});
				return;
			}

			// We should initialise only once
			if (_self.vars.INITIALISED) {
				return;
			}
			_self.vars.INITIALISED = true;

			// Markup and event listeners >>>
			_self.vars.HTML_MARKUP = createHtmlMarkup();

			if ($('.eupopup-block').length > 0) {
				$('.eupopup-block').append(_self.vars.HTML_MARKUP);
			} else {
				$('BODY').append(_self.vars.HTML_MARKUP);
			}

			$('.eupopup-button_1').click(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
			});
			$('.eupopup-closebutton').click(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
			});
			// ^^^ Markup and event listeners

			// Ready to start!
			$('.eupopup-container').show();

			// In case it's alright to just display the message once
			if (_self.params.autoAcceptCookiePolicy) {
				setUserAcceptsCookies(true);
			}

		}

	};

	return publicfunc;
});

$(document).ready( function() {
	if ($(".eupopup").length > 0) {
		$(document).euCookieLawPopup().init({
			'info' : 'YOU_CAN_ADD_MORE_SETTINGS_HERE',
			'popupTitle' : 'This website is using cookies. ',
			'popupText' : 'We use them to give you the best experience. If you continue using our website, we\'ll assume that you are happy to receive all cookies on this website.'
		});
	}
});

$(document).bind("user_cookie_consent_changed", function(event, object) {
	console.log("User cookie consent changed: " + $(object).attr('consent') );
});

}(jQuery));

// Marquee
(function(f){f.fn.marquee=function(x){return this.each(function(){var a=f.extend({},f.fn.marquee.defaults,x),b=f(this),c,h,t,u,k,e=3,y="animation-play-state",n=!1,E=function(a,b,c){for(var e=["webkit","moz","MS","o",""],d=0;d<e.length;d++)e[d]||(b=b.toLowerCase()),a.addEventListener(e[d]+b,c,!1)},F=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);b.push();return"{"+b.join(",")+"}"},p={pause:function(){n&&a.allowCss3Support?c.css(y,"paused"):f.fn.pause&&c.pause();b.data("runningStatus",
"paused");b.trigger("paused")},resume:function(){n&&a.allowCss3Support?c.css(y,"running"):f.fn.resume&&c.resume();b.data("runningStatus","resumed");b.trigger("resumed")},toggle:function(){p["resumed"==b.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(b.timer);b.find("*").andSelf().unbind();b.html(b.find(".js-marquee:first").html())}};if("string"===typeof x)f.isFunction(p[x])&&(c||(c=b.find(".js-marquee-wrapper")),!0===b.data("css3AnimationIsSupported")&&(n=!0),p[x]());else{var v;
f.each(a,function(c,d){v=b.attr("data-"+c);if("undefined"!==typeof v){switch(v){case "true":v=!0;break;case "false":v=!1}a[c]=v}});a.speed&&(a.duration=a.speed*parseInt(b.width(),10));u="up"==a.direction||"down"==a.direction;a.gap=a.duplicated?parseInt(a.gap):0;b.wrapInner('<div class="js-marquee"></div>');var l=b.find(".js-marquee").css({"margin-right":a.gap,"float":"left"});a.duplicated&&l.clone(!0).appendTo(b);b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');c=b.find(".js-marquee-wrapper");
if(u){var m=b.height();c.removeAttr("style");b.height(m);b.find(".js-marquee").css({"float":"none","margin-bottom":a.gap,"margin-right":0});a.duplicated&&b.find(".js-marquee:last").css({"margin-bottom":0});var q=b.find(".js-marquee:first").height()+a.gap;a.startVisible&&!a.duplicated?(a._completeDuration=(parseInt(q,10)+parseInt(m,10))/parseInt(m,10)*a.duration,a.duration*=parseInt(q,10)/parseInt(m,10)):a.duration*=(parseInt(q,10)+parseInt(m,10))/parseInt(m,10)}else k=b.find(".js-marquee:first").width()+
a.gap,h=b.width(),a.startVisible&&!a.duplicated?(a._completeDuration=(parseInt(k,10)+parseInt(h,10))/parseInt(h,10)*a.duration,a.duration*=parseInt(k,10)/parseInt(h,10)):a.duration*=(parseInt(k,10)+parseInt(h,10))/parseInt(h,10);a.duplicated&&(a.duration/=2);if(a.allowCss3Support){var l=document.body||document.createElement("div"),g="marqueeAnimation-"+Math.floor(1E7*Math.random()),A=["Webkit","Moz","O","ms","Khtml"],B="animation",d="",r="";l.style.animation&&(r="@keyframes "+g+" ",n=!0);if(!1===
n)for(var z=0;z<A.length;z++)if(void 0!==l.style[A[z]+"AnimationName"]){l="-"+A[z].toLowerCase()+"-";B=l+B;y=l+y;r="@"+l+"keyframes "+g+" ";n=!0;break}n&&(d=g+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s infinite "+a.css3easing,b.data("css3AnimationIsSupported",!0))}var C=function(){c.css("margin-top","up"==a.direction?m+"px":"-"+q+"px")},D=function(){c.css("margin-left","left"==a.direction?h+"px":"-"+k+"px")};a.duplicated?(u?a.startVisible?c.css("margin-top",0):c.css("margin-top","up"==a.direction?
m+"px":"-"+(2*q-a.gap)+"px"):a.startVisible?c.css("margin-left",0):c.css("margin-left","left"==a.direction?h+"px":"-"+(2*k-a.gap)+"px"),a.startVisible||(e=1)):a.startVisible?e=2:u?C():D();var w=function(){a.duplicated&&(1===e?(a._originalDuration=a.duration,a.duration=u?"up"==a.direction?a.duration+m/(q/a.duration):2*a.duration:"left"==a.direction?a.duration+h/(k/a.duration):2*a.duration,d&&(d=g+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s "+a.css3easing),e++):2===e&&(a.duration=a._originalDuration,
d&&(g+="0",r=f.trim(r)+"0 ",d=g+" "+a.duration/1E3+"s 0s infinite "+a.css3easing),e++));u?a.duplicated?(2<e&&c.css("margin-top","up"==a.direction?0:"-"+q+"px"),t={"margin-top":"up"==a.direction?"-"+q+"px":0}):a.startVisible?2===e?(d&&(d=g+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s "+a.css3easing),t={"margin-top":"up"==a.direction?"-"+q+"px":m+"px"},e++):3===e&&(a.duration=a._completeDuration,d&&(g+="0",r=f.trim(r)+"0 ",d=g+" "+a.duration/1E3+"s 0s infinite "+a.css3easing),C()):(C(),t={"margin-top":"up"==
a.direction?"-"+c.height()+"px":m+"px"}):a.duplicated?(2<e&&c.css("margin-left","left"==a.direction?0:"-"+k+"px"),t={"margin-left":"left"==a.direction?"-"+k+"px":0}):a.startVisible?2===e?(d&&(d=g+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s "+a.css3easing),t={"margin-left":"left"==a.direction?"-"+k+"px":h+"px"},e++):3===e&&(a.duration=a._completeDuration,d&&(g+="0",r=f.trim(r)+"0 ",d=g+" "+a.duration/1E3+"s 0s infinite "+a.css3easing),D()):(D(),t={"margin-left":"left"==a.direction?"-"+k+"px":
h+"px"});b.trigger("beforeStarting");if(n){c.css(B,d);var l=r+" { 100%  "+F(t)+"}",p=c.find("style");0!==p.length?p.filter(":last").html(l):c.append("<style>"+l+"</style>");E(c[0],"AnimationIteration",function(){b.trigger("finished")});E(c[0],"AnimationEnd",function(){w();b.trigger("finished")})}else c.animate(t,a.duration,a.easing,function(){b.trigger("finished");a.pauseOnCycle?b.timer=setTimeout(w,a.delayBeforeStart):w()});b.data("runningStatus","resumed")};b.bind("pause",p.pause);b.bind("resume",
p.resume);a.pauseOnHover&&b.bind("mouseenter mouseleave",p.toggle);n&&a.allowCss3Support?w():b.timer=setTimeout(w,a.delayBeforeStart)}})};f.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1E3,direction:"left",duplicated:!1,duration:5E3,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}})(jQuery);



// Marquee
$('.marquee').marquee({
  duration: 12500,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true
});

// Geo Location Box expansion
$('.geoicon').click(function() {
  $('div.geotag').toggleClass('expand');
});

$('.searchicon').click(function() {
  $('div.searchtag').toggleClass('expand');
});
