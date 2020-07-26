$(document).ready(function(){"use strict";u(),d();var t=$(".header-search-wrapper"),o=$("body"),n=$(".search-toggle");n.on("click",function(e){t.toggleClass("show"),$(this).toggleClass("active"),t.find("input").focus(),e.preventDefault()}),o.on("click",function(e){t.hasClass("show")&&(t.removeClass("show"),n.removeClass("active"),o.removeClass("is-search-active"))}),$(".header-search").on("click",function(e){e.stopPropagation()});var i=$(".category-dropdown"),a=i.data("visible");$(".sticky-header").length&&992<=$(window).width()&&new Waypoint.Sticky({element:$(".sticky-header")[0],stuckClass:"fixed",offset:-300,handler:function(e){if(a&&"up"==e)return i.addClass("show").find(".dropdown-menu").addClass("show"),i.find(".dropdown-toggle").attr("aria-expanded","true"),!1;i.hasClass("show")&&(i.removeClass("show").find(".dropdown-menu").removeClass("show"),i.find(".dropdown-toggle").attr("aria-expanded","false"))}}),$.fn.superfish&&$(".menu, .menu-vertical").superfish({popUpSelector:"ul, .megamenu",hoverClass:"show",delay:0,speed:80,speedOut:80,autoArrows:!0}),$(".mobile-menu-toggler").on("click",function(e){o.toggleClass("mmenu-active"),$(this).toggleClass("active"),e.preventDefault()}),$(".mobile-menu-overlay, .mobile-menu-close").on("click",function(e){o.removeClass("mmenu-active"),$(".menu-toggler").removeClass("active"),e.preventDefault()}),$(".mobile-menu").find("li").each(function(){var e=$(this);e.find("ul").length&&$("<span/>",{class:"mmenu-btn"}).appendTo(e.children("a"))}),$(".mmenu-btn").on("click",function(e){var t=$(this).closest("li"),o=t.find("ul").eq(0);t.hasClass("open")?o.slideUp(300,function(){t.removeClass("open")}):o.slideDown(300,function(){t.addClass("open")}),e.stopPropagation(),e.preventDefault()});var s,e,r,l=$(".sidebar-toggler");if(l.on("click",function(e){o.toggleClass("sidebar-filter-active"),$(this).toggleClass("active"),e.preventDefault()}),$(".sidebar-filter-overlay").on("click",function(e){o.removeClass("sidebar-filter-active"),l.removeClass("active"),e.preventDefault()}),$(".sidebar-filter-clear").on("click",function(e){$(".sidebar-shop").find("input").prop("checked",!1),e.preventDefault()}),$.fn.magnificPopup&&$(".btn-iframe").magnificPopup({type:"iframe",removalDelay:600,preloader:!1,fixedContentPos:!1,closeBtnInside:!1}),$.fn.hoverIntent&&$(".product-3").hoverIntent(function(){var e=$(this),t=e.outerHeight()-(e.find(".product-body").outerHeight()+e.find(".product-media").outerHeight()),o=e.find(".product-footer").outerHeight()-t;e.find(".product-footer").css({visibility:"visible",transform:"translateY(0)"}),e.find(".product-body").css("transform","translateY("+-o+"px)")},function(){var e=$(this);e.find(".product-footer").css({visibility:"hidden",transform:"translateY(100%)"}),e.find(".product-body").css("transform","translateY(0)")}),"object"==typeof noUiSlider){var c=document.getElementById("price-slider");if(null==c)return;noUiSlider.create(c,{start:[0,75e4],connect:!0,step:50,margin:200,range:{min:1e3,max:1e6},tooltips:!0,format:wNumb({decimals:0,suffix:"طھظˆظ…ط§ظ†"})}),c.noUiSlider.on("update",function(e,t){$("#filter-price-range").text(e.join(" - "))})}function d(){$.fn.inputSpinner&&$("input[type='number']").inputSpinner({decrementButton:'<i class="icon-minus"></i>',incrementButton:'<i class="icon-plus"></i>',groupClass:"input-spinner",buttonsClass:"btn-spinner",buttonsWidth:"26px"})}function u(e,t){var o;$.fn.owlCarousel&&(o={items:1,loop:!0,margin:0,responsiveClass:!0,nav:!0,navText:['<i class="icon-angle-left">','<i class="icon-angle-right">'],dots:!0,smartSpeed:400,autoplay:!1,autoplayTimeout:15e3},void 0===e&&(e=$("body")),t&&(o=$.extend({},o,t)),e.find('[data-toggle="owl"]').each(function(){var e=$(this),t=$.extend({},o,e.data("owl-options"));e.owlCarousel(t)}))}function p(e,t){$(e).each(function(){var e=$(this);e.isotope({itemSelector:t,layoutMode:e.data("layout")?e.data("layout"):"masonry"})})}function f(n,i){$(n).find("a").on("click",function(e){var t=$(this),o=t.attr("data-filter");$(n).find(".active").removeClass("active"),$(i).isotope({filter:o,transitionDuration:"0.7s"}),t.closest("li").addClass("active"),e.preventDefault()})}$.fn.countdown&&$(".product-countdown").each(function(){var e,t,o=$(this),n=o.data("until"),i=o.data("compact"),a=o.data("format")?o.data("format"):"DHMS",s=(o.data("labels-short"),["ط³ط§ظ„","ظ…ط§ظ‡","ظ‡ظپطھظ‡","ط±ظˆط²","ط³ط§ط¹طھ","ط¯ظ‚غŒظ‚ظ‡","ط«ط§ظ†غŒظ‡"]),r=(o.data("labels-short"),["ط³ط§ظ„","ظ…ط§ظ‡","ظ‡ظپطھظ‡","ط±ظˆط²","ط³ط§ط¹طھ","ط¯ظ‚غŒظ‚ظ‡","ط«ط§ظ†غŒظ‡"]);t=o.data("relative")?n:(e=n.split(", "),new Date(e[0],e[1]-1,e[2])),o.countdown({until:t,format:a,padZeroes:!0,compact:i,compactLabels:["y","m","w"," ط±ظˆط²طŒ "],timeSeparator:" : ",labels:s,labels1:r})}),$.fn.stick_in_parent&&992<=$(window).width()&&$(".sticky-content").stick_in_parent({offset_top:80,inner_scrolling:!1}),$.fn.elevateZoom&&($("#product-zoom").elevateZoom({gallery:"product-zoom-gallery",galleryActiveClass:"active",zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:400,zoomWindowFadeOut:400,responsive:!0}),$(".product-gallery-item").on("click",function(e){$("#product-zoom-gallery").find("a").removeClass("active"),$(this).addClass("active"),e.preventDefault()}),s=$("#product-zoom").data("elevateZoom"),$("#btn-product-gallery").on("click",function(e){$.fn.magnificPopup&&($.magnificPopup.open({items:s.getGalleryList(),type:"image",gallery:{enabled:!0},fixedContentPos:!1,removalDelay:600,closeBtnInside:!1},0),e.preventDefault())})),$.fn.owlCarousel&&$.fn.elevateZoom&&((e=$(".product-gallery-carousel")).on("initialized.owl.carousel",function(){e.find(".active img").elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:400,zoomWindowFadeOut:400,responsive:!0})}),e.owlCarousel({loop:!1,margin:0,responsiveClass:!0,nav:!0,navText:['<i class="icon-angle-left">','<i class="icon-angle-right">'],dots:!1,smartSpeed:400,autoplay:!1,autoplayTimeout:15e3,responsive:{0:{items:1},560:{items:2},992:{items:3},1200:{items:3}}}),e.on("change.owl.carousel",function(){$(".zoomContainer").remove()}),e.on("translated.owl.carousel",function(){e.find(".active img").elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:400,zoomWindowFadeOut:400,responsive:!0})})),$.fn.elevateZoom&&($(".product-separated-item").find("img").elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:400,zoomWindowFadeOut:400,responsive:!0}),r=[],$(".product-gallery-separated").find("img").each(function(){var e=$(this),t={src:e.attr("src"),title:e.attr("alt")};r.push(t)}),$("#btn-separated-gallery").on("click",function(e){$.fn.magnificPopup&&($.magnificPopup.open({items:r,type:"image",gallery:{enabled:!0},fixedContentPos:!1,removalDelay:600,closeBtnInside:!1},0),e.preventDefault())})),$("#checkout-discount-input").on("focus",function(){$(this).parent("form").find("label").css("opacity",0)}).on("blur",function(){var e=$(this);0!==e.val().length?e.parent("form").find("label").css("opacity",0):e.parent("form").find("label").css("opacity",1)}),$(".tab-trigger-link").on("click",function(e){var t=$(this).attr("href");$(".nav-dashboard").find('a[href="'+t+'"]').trigger("click"),e.preventDefault()}),"function"==typeof imagesLoaded&&$.fn.isotope&&($(".portfolio-container").imagesLoaded(function(){p(".portfolio-container",".portfolio-item"),f(".portfolio-filter",".portfolio-container")}),$(".entry-container").imagesLoaded(function(){p(".entry-container",".entry-item"),f(".entry-filter",".entry-container")}),$(".product-gallery-masonry").imagesLoaded(function(){p(".product-gallery-masonry",".product-gallery-item")}),$(".products-container").imagesLoaded(function(){p(".products-container",".product-item"),f(".product-filter",".products-container")}));var m=$(".count");$.fn.countTo?$.fn.waypoint?m.waypoint(function(){$(this.element).countTo()},{offset:"90%",triggerOnce:!0}):m.countTo():m.each(function(){var e=$(this),t=e.data("to");e.text(t)});var v=$(".scroll-to");v.length&&v.on("click",function(e){var t,o=$(this).attr("href"),n=$(o);n.length&&(t=992<=$(window).width()?n.offset().top-52:n.offset().top,$("html, body").animate({scrollTop:t},600),e.preventDefault())}),$("#review-link").on("click",function(e){var t,o=$(this).attr("href"),n=$(o);$("#product-accordion-review").length&&$("#product-accordion-review").collapse("show"),n.length&&(t=992<=$(window).width()?n.offset().top-72:n.offset().top-10,$("html, body").animate({scrollTop:t},600),n.tab("show")),e.preventDefault()});var g,h,y,w,b,C=$("#scroll-top");$(window).on("load scroll",function(){400<=$(window).scrollTop()?C.addClass("show"):C.removeClass("show")}),C.on("click",function(e){$("html, body").animate({scrollTop:0},800),e.preventDefault()}),document.getElementById("map")&&"object"==typeof google&&(g=new google.maps.LatLng(40.8127911,-73.9624553),h=new google.maps.Map(document.getElementById("map"),{zoom:14,center:g,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP}),y=new google.maps.InfoWindow({content:'<address>88 Pine St,<br>New York, NY 10005, USA<br><a href="#" class="direction-link" target="_blank">Get Directions <i class="icon-angle-right"></i></a></address>',maxWidth:360}),w=new google.maps.Marker({position:g,map:h,animation:google.maps.Animation.DROP}),google.maps.event.addListener(w,"click",(b=w,function(){y.open(h,b)})));var k=$(".view-all-demos");k.on("click",function(e){e.preventDefault(),$(".demo-item.hidden").addClass("show"),$(this).addClass("disabled-hidden")}),$(".megamenu-container .sf-with-ul").hover(function(){$(".demo-item.show").addClass("hidden"),$(".demo-item.show").removeClass("show"),k.removeClass("disabled-hidden")}),$(".btn-quickview").on("click",function(e){var t=$(this).attr("href");$.fn.magnificPopup&&(setTimeout(function(){$.magnificPopup.open({type:"ajax",mainClass:"mfp-ajax-product",tLoading:"",preloader:!1,removalDelay:350,items:{src:t},callbacks:{ajaxContentAdded:function(){u($(".quickView-content"),{onTranslate:function(e){var t=($(e.target).data("owl.carousel").current()+e.item.count-Math.ceil(e.item.count/2))%e.item.count;$(".quickView-content .carousel-dot").eq(t).addClass("active").siblings().removeClass("active")}}),d()},open:function(){$("body").css("overflow-x","hidden"),$(".sticky-header.fixed").css("padding-right","1.7rem")},close:function(){$("body").css("overflow-x","hidden"),$(".sticky-header.fixed").css("padding-right","0")}},ajax:{tError:""}},0)},500),e.preventDefault())}),$("body").on("click",".carousel-dot",function(){$(this).siblings().removeClass("active"),$(this).addClass("active")}),$("body").on("click",".btn-fullscreen",function(e){var o=[];$(this).parents(".owl-stage-outer").find(".owl-item:not(.cloned)").each(function(){var e=$(this).find("img"),t={src:e.attr("src"),title:e.attr("alt")};o.push(t)});var t=$(this).attr("href"),n=$.magnificPopup.instance;n.isOpen&&n.close(),setTimeout(function(){$.magnificPopup.open({type:"ajax",mainClass:"mfp-ajax-product",tLoading:"",preloader:!1,removalDelay:350,items:{src:t},callbacks:{ajaxContentAdded:function(){u($(".quickView-content"),{onTranslate:function(e){var t=($(e.target).data("owl.carousel").current()+e.item.count-Math.ceil(e.item.count/2))%e.item.count;$(".quickView-content .carousel-dot").eq(t).addClass("active").siblings().removeClass("active"),$(".curidx").html(1+t)}}),d()},open:function(){$("body").css("overflow-x","hidden"),$(".sticky-header.fixed").css("padding-right","1.7rem")},close:function(){$("body").css("overflow-x","hidden"),$(".sticky-header.fixed").css("padding-right","0")}},ajax:{tError:""}},0)},500),e.preventDefault()}),document.getElementById("newsletter-popup-form")&&setTimeout(function(){var e=$.magnificPopup.instance;e.isOpen&&e.close(),setTimeout(function(){$.magnificPopup.open({items:{src:"#newsletter-popup-form"},type:"inline",removalDelay:350,callbacks:{open:function(){$("body").css("overflow-x","hidden"),$(".sticky-header.fixed").css("padding-right","1.7rem")},close:function(){$("body").css("overflow-x","hidden"),$(".sticky-header.fixed").css("padding-right","0")}}})},500)},1e4)}),jQuery("#carousel").owlCarousel({autoplay:!0,lazyLoad:!0,loop:!0,margin:20,responsiveClass:!0,autoHeight:!0,autoplayTimeout:7e3,smartSpeed:800,nav:!0,responsive:{0:{items:1},600:{items:3},1024:{items:4},1366:{items:4}}});