$(function() {
	var message = {

		message: [
			'Web Developer', 
			'Data Analyts', 
		],
		counterS: 0,
		counterL: 0,
		deleteS: false,

		init: function() {
			this.cacheElem();
			this.type();
		},

		cacheElem: function() {
			this.$text = $('.text');
		},

		type: function() {
			var message 	= this.message[this.counterS],
				  that 	    = this,
				  speed 	  = 0;

			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
			if(this.message[this.counterS] != message && !this.deleteS) {
				this.$text.text(message);
				speed = 120;
			}
			else {
				this.deleteS = true;
				speed = this.message[this.counterS] == message ? 1000 : 40;
				this.$text.text(message);
				if (message == '') {
					this.deleteS = false;
					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
				}
			}
			setTimeout(function(){that.type()}, speed);
		}
	};
	message.init();
});


(function($){"use strict";$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:(target.offset().top-71)},1000,"easeInOutExpo");return false;}}});$(document).scroll(function(){var scrollDistance=$(this).scrollTop();if(scrollDistance>100){$('.scroll-to-top').fadeIn();}else{$('.scroll-to-top').fadeOut();}});$('.js-scroll-trigger').click(function(){$('.navbar-collapse').collapse('hide');});$('body').scrollspy({target:'#mainNav',offset:80});var navbarCollapse=function(){if($("#mainNav").offset().top>100){$("#mainNav").addClass("navbar-shrink");}else{$("#mainNav").removeClass("navbar-shrink");}};navbarCollapse();$(window).scroll(navbarCollapse);$(function(){$("body").on("input propertychange",".floating-label-form-group",function(e){$(this).toggleClass("floating-label-form-group-with-value",!!$(e.target).val());}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus");}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus");});});})(jQuery);