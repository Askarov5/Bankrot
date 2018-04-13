$(window).on("load",function(){
    
    $("#content-3").mCustomScrollbar({
        scrollButtons:{enable:true},
        theme:"light-thick",
        scrollbarPosition:"outside"
    });
    
    $("#content-4").mCustomScrollbar({
        theme:"rounded-dots",
        scrollInertia:400
    });
    
    $("#brands").mCustomScrollbar({
        axis:"x",
        theme:"light-3",
        autoExpandScrollbar:true,
        advanced:{autoExpandHorizontalScroll:true}
    });
    
    $("#content-6").mCustomScrollbar({
        axis:"x",
        theme:"light-3",
        advanced:{autoExpandHorizontalScroll:true}
    });
    
    $("#content-7").mCustomScrollbar({
        scrollButtons:{enable:true},
        theme:"3d-thick"
    });
    
    $("#content-8").mCustomScrollbar({
        axis:"yx",
        scrollButtons:{enable:true},
        theme:"3d",
        scrollbarPosition:"outside"
    });
    
    $("#content-9").mCustomScrollbar({
        scrollButtons:{enable:true,scrollType:"stepped"},
        keyboard:{scrollType:"stepped"},
        mouseWheel:{scrollAmount:188},
        theme:"rounded-dark",
        autoExpandScrollbar:true,
        snapAmount:188,
        snapOffset:65
    });
    
});

$(document).ready(function(){
	/*Slider*/
	$('.main-slider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	});

	/*Nav Toggle*/
	$(".nav-toggle_header").click(function(){
		$('.header__top').addClass('active');
	});
	$('.nav-toggle_close').click(function(){
		$('.header__top').removeClass('active');
	});

    $('.btn_services').click(function(){
        $('.services-burger').toggleClass('active');
        $('.section_services').toggleClass('active');
    });

    /*Sticky-Sidebar*/
    $(".sidebar__inner").stick_in_parent({recalc_every: 1});

    /*SideBar Nav + secondary*/
    $('.sidebar-nav__item.active').next().addClass('active');

    /*Modal Open-Close*/
    $('#ask').click(function(e){
        e.preventDefault();
        $('.modal_ask').addClass('open');
    });
    $('.close_modal').click(function(){
        $('.modal_ask').removeClass('open');
        $('.modal').removeClass('modal_done');
    });

    $('.send-modal').click(function(e){
        e.preventDefault();
        /*if(smth true){}*/
        $('.modal').addClass('modal_done');
    });
    $('.close-modal').click(function(e){
        e.preventDefault();
        $('.modal_ask').removeClass('open');
        $('.modal').removeClass('modal_done');
    });

	/*Init tabs*/
	$(".tabs").lightTabs();

});

/*Scroll Effects*/
$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $('.header-placeholder').show();
        $('.header-placeholder').addClass('on');
        $('.header').addClass('header_fixed');
        $('.section_services').addClass('scroll');
    } else {
        $('.header-placeholder').hide();
        $('.header-placeholder').removeClass('on');
        $('.header').removeClass('header_fixed');
        $('.section_services').removeClass('scroll');
    }
}); 


    
    


/*Tabs Function*/
(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
