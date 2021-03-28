$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

  $(".item-question__name").click(function(e) {
		e.preventDefault();
		$(".item-question").removeClass("active");

		$(".item-question__content").slideUp(200);
		if ($(this).siblings(".item-question__content").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".item-question__content").slideDown(200);
		
		} else {
			$(this).parent().removeClass("active");
		$(this).siblings(".item-question__content").slideUp(200);
		
		}

		});

	//плавный скролл
	$(".navigation-page li a").mPageScroll2id({
		offset: 120
	});


$(".modal-popup__background, .modal-popup__close").click(function() {
$(".modal").fadeOut(200);
});

$(".link-subscribe").click(function(e) {
	e.preventDefault();
$(".modal").fadeIn(200);
});
	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile a").click(function() {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
		});

	/*menu page*/
		var $header_page = $(".header__page");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 240 && $header_page.hasClass("default") ){
    $header_page.removeClass("default").addClass("fixed");
     $header_page.slideDown(200);
  } else if($(this).scrollTop() <= 240 && $header_page.hasClass("fixed")) {
    $header_page.removeClass("fixed").addClass("default");
     $header_page.slideUp(200);
  }
  
});

if ( $(this).scrollTop() > 240 && $header_page.hasClass("default") ){
    $header_page.removeClass("default").addClass("fixed");
     $header_page.slideDown(200);
  } else if($(this).scrollTop() <= 240 && $header_page.hasClass("fixed")) {
    $header_page.removeClass("fixed").addClass("default");
     $header_page.slideUp(200);
  }



	$(".input-phone").mask("+7 (999) 999-99-99");



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/

	var $btn_top = $(".btn-top");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 100 && $btn_top.hasClass("default") ){
    $btn_top.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 100 && $btn_top.hasClass("fixed")) {
    $btn_top.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 100 && $btn_top.hasClass("default") ){
    $btn_top.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 100 && $btn_top.hasClass("fixed")) {
    $btn_top.removeClass("fixed").addClass("default");
  }

	$(".btn-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

