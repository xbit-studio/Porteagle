!function(n){Berserk.behaviors.buttons_js={attach:function(t,s){window.addEventListener("load",function(){var s;n(".btn__dropdown_wrap").each(function(){n(this).hasClass("open")?(s=0,n(this).children().each(function(){s+=n(this).outerHeight()}),n(this).css({height:s})):n(this).css({height:n(this).children("li:first-child").innerHeight()})}),n(".btn__dropdown_wrap").on("click",function(t){t.target===this&&(s=0,n(this).children().each(function(){s+=n(this).outerHeight()}),n(this).toggleClass("open"),n(this).hasClass("open")?n(this).css({height:s}):n(this).css({height:n(this).children("li:first-child").innerHeight()}))})}),n(".btn-pos").on("mouseenter",function(t){var s=n(this).offset(),e=t.pageX-s.left,i=t.pageY-s.top;n(this).find("span").css({top:i,left:e})}).on("mouseout",function(t){var s=n(this).offset(),e=t.pageX-s.left,i=t.pageY-s.top;n(this).find("span").css({top:i,left:e})}),n(".slide-bg-wrap").on("mouseenter",function(t){var s=n(this).offset(),e=t.pageX-s.left,i=t.pageY-s.top;n(this).find(".slide-bg").css({top:i,left:e})}).on("mouseout",function(t){var s=n(this).offset(),e=t.pageX-s.left,i=t.pageY-s.top;n(this).find(".slide-bg").css({top:i,left:e})}),n(".btn-gradient").on("mousemove",function(t){var s=n(this).offset(),e=t.pageX-s.left,i=t.pageY-s.top;n(this).css({"--x":e,"--y":i})})}}}(jQuery);