!function(l){Berserk.behaviors.portfolio_isotope_init={attach:function(i,t){if("function"!=typeof Isotope&&"function"!=typeof l.fn.brk_hover3d||"function"!=typeof anime)return console.log("Waiting for the Isotope || brk-hover-3d || anime library"),void setTimeout(Berserk.behaviors.portfolio_isotope_init.attach,t.timeout_delay,i,t);var e=l(".brk-grid:not(.rendered)",i).addClass("rendered");if(e.length){var r,d,n,o,a=e.attr("data-grid-cols"),s=l(window).width();function c(i){992<i?(d=100/a+"%",n=100/a*2+"%",e.find(".brk-grid__sizer").css("width",d),e.find(".brk-grid__item").css("width",d),e.find(".brk-grid__item_width-2").css("width",n)):i<=992&&r?(d=100/r+"%",n=100/r*2+"%",e.find(".brk-grid__sizer").css("width",d),e.find(".brk-grid__item").css("width",d),e.find(".brk-grid__item_width-2").css("width",n)):i<=992&&!r&&(d=100/a+"%",n=100/a*2+"%",e.find(".brk-grid__sizer").css("width",d),e.find(".brk-grid__item").css("width",d),e.find(".brk-grid__item_width-2").css("width",n))}e.attr("data-grid-cols-tablet")&&(r=e.attr("data-grid-cols-tablet")),c(s),l(window).resize(function(){c(l(window).width())}),setTimeout(function(){o=new Isotope(e.get(0),{itemSelector:".brk-grid__item",percentPosition:!0,masonry:{columnWidth:".brk-grid__sizer",rowHeight:".brk-grid__sizer"},getSortData:{category_data:"[data-category]",name:".brk-simple-card__title",category_name:".brk-simple-card__category"}}),e.find("img").css("display","block")},400),l(".brk-filters:not(.rendered)",i).find(".brk-filters__item").each(function(){var i=l(this),t=l(this).attr("data-filter");if(t&&"*"!=t){var r=e.find(t).length;i.find(".brk-filters__count").html(r)}if(t&&"*"==t){r=e.find(".brk-grid__item").length;i.find(".brk-filters__count").html(r)}}),l(".brk-filters:not(.rendered)",i).on("click","li",function(){var i=l(this).attr("data-filter").toLowerCase();o.arrange({filter:i})}),l(".brk-filters:not(.rendered)",i).each(function(i,t){var r=l(t);r.on("click","li",function(){r.find(".active").removeClass("active"),l(this).addClass("active")})}),l(".brk-filters:not(.rendered)",i).addClass("rendered"),l("#brk-grid-sort:not(.rendered)",i).change(function(){var i=l(this).val();o.arrange({sortBy:i}),l("#brk-select__sizer-option").html(l("#brk-grid-sort option:selected").text()),l(this).width(l("#brk-select__sizer").width()+50)})}var _=l(".brk-simple-card:not(.rendered)",i);_.length&&_.each(function(){l(this).addClass("rendered"),l(this).brk_hover3d("animation2",{imgWrapper:".brk-simple-card__animation-wrapper",caption:".brk-simple-card__info"})});var f=l(".brk-btn-swipe-card:not(.rendered)",i);f.length&&f.each(function(){l(this).addClass("rendered"),l(this).brk_hover3d("animation2",{caption:".brk-btn-swipe-card__caption"})})}}}(jQuery);