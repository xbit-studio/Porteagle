!function(i){Berserk.behaviors.portfolio_categories_init={attach:function(o,e){if(void 0===i.fn.slick)return console.log("Waiting for the slick library"),void setTimeout(Berserk.behaviors.portfolio_categories_init.attach,e.timeout_delay,o,e);i(".brs-portfolio-carousel-item:not(.rendered)",o).slick({infinite:!0,dots:!0,prevArrow:!1,nextArrow:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}).addClass("rendered")}}}(jQuery);