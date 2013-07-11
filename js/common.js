$(function(){
    $('.realty__list_acc .realty__pl-link').click(function(e){
        var ttl = $(this),
            block = ttl.nextAll('.realty__unusual-popup').eq(0);

        ttl.toggleClass('realty__pl-link-active');
        block.toggle();

        e.preventDefault();
    });

    $(function() {
        $(".realty__list_acc .ico_type_close").click(function() {
            $(this).parents(".realty__unusual-popup").hide();
            $(".realty__list_acc .realty__pl-link").removeClass("realty__pl-link-active");
            $(this).toggleClass("realty__pl-link-active"); return false;
        });
    });


    $(function() {
        $("#changePlan").click(function(e) {
            $(".popup__plan").show();
            e.preventDefault();
        });
        $(".popup-box_plan .ico_type_close-dark").click(function(e) {
            $(".popup__plan").hide();

            e.preventDefault();

    });
    });
    $(function() {
        $(".maplook").click(function(e) {
            $(".popup_map").show();
            e.preventDefault();
        });
        $(".popup-box_plan .ico_type_close").click(function(e) {
            $(".popup_map").hide();

            e.preventDefault();

        });
    });

    $("#slider").carouFredSel({
        auto : 3000,
        infinite: true,
        pagination  : "#slider_dot",
        scroll: {
//                   fx: 'crossfade',
            duration: 500,
            pauseOnHover: true
        },
        items: {
            visible: 1,
            height: "auto"
        }
});
    $('#slider').parent('.caroufredsel_wrapper').css('height','346px')


    $("#foo1").carouFredSel({
        circular: false,
        infinite: true,
        auto    : false,
        width   : "100%",
        scroll  : 1,
        prev    : {
            button  : "#foo1_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo1_next",
            key     : "right"
        }
});


    $("#foo2").carouFredSel({
        circular: false,
        infinite: true,
        scroll: 1,
        width   : "100%",
        auto    : false,
        scroll: 1,
        prev    : {
            button  : "#foo2_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo2_next",
            key     : "right"
        }
    });

    $("#foo3").carouFredSel({
        circular: false,
        infinite: true,
        auto    : false,
        width   : "100%",
        scroll: 1,
        prev    : {
            button  : "#foo3_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo3_next",
            key     : "right"
        }
    });
    $("#foo4").carouFredSel({
        circular: false,
        infinite: true,
        auto    : false,
        scroll: 1,
        width   : "100%",
        prev    : {
            button  : "#foo4_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo4_next",
            key     : "right"
        }
    });
    $("#foo5").carouFredSel({
        circular: false,
        infinite: true,
        scroll: 1,
        auto    : false,
        width   : "100%",
        prev    : {
            button  : "#foo5_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo5_next",
            key     : "right"
        },
        items: {
            visible: {
                max: 4,
                min:3
            },
            height: "auto"
        }
    });
    $("#foo6").carouFredSel({
        circular: false,
        infinite: true,
        scroll: 1,
        auto    : false,
        width   : "100%",
        prev    : {
            button  : "#foo6_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo6_next",
            key     : "right"
        },
        items: {
            visible: {
                max: 4,
                min:3
            },
            height: "auto"
        }
    });

        $(".js-show-popup").fancybox({
            "onComplete": function(){
                $("#fancybox-content").addClass("galery-popup");
                $("#fancybox-close").addClass("galery-close");
                $("#fancybox-outer").addClass("galery-outer");
                $("#fancybox-bg").addClass("galery-bg");
            }
        });

    $(".download-project").fancybox({
        "onComplete": function(){
            $("#fancybox-content").addClass("map-content");
            $("#fancybox-close").addClass("map-close");
            $("#fancybox-outer").addClass("map-outer");
        }
    });

    $("a[rel=group]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition'     : 'inside',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
        return '<span id="fancybox-title-over" class="fancybox-title-name"> ' + (title.length ? '   ' + title : '') +'</span><span class="fancybox-title-num">'+ (currentIndex + 1) + ' / ' + currentArray.length + '</span>';
    }

});
    $("a[rel=group2]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition'     : 'inside',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over" class="fancybox-title-name"> ' + (title.length ? '   ' + title : '') +'</span>';
        }

    });

    function UpdateVK(videoUrl) {
        $("#vk_like").html("");
        VK.Widgets.Like('vk_like', { type: "mini", pageUrl: videoUrl });
    }

    function UpdateFacebook(videoUrl) {
        $(".fb-like").html("");
        $(".fb-like").attr("data-href", videoUrl);
        FB.XFBML.parse();
    };

    function UpdateTwitter(videoUrl) {
        $(".twitter-share-button").html("");
        $(".twitter-share-button").attr("data-url", videoUrl);
        var twitter = document.createElement('a');
        twitter.setAttribute('href', 'http://twitter.com/share');
        twitter.setAttribute('class', 'twitter-share-button twitter-tweet');
        twitter.setAttribute('data-url',videoUrl);
        twitter.style.top = '20px';
        twitter.style.left = '300px';
        twitter.innerHTML = "Tweet";

        $('#twitter-widg').html(twitter);

        twttr.widgets.load();
    }

    $(function() {
        $(".realty__video-block").click(function(e) {

            var popup = $("#video1"),
                that = $(this),
                text = $(".realty__video-text", $(this)).text();
            popup.show();
            $(".video-head",popup).text(text);
            $("iframe.youtube",popup).attr({
                "src": that.attr("data-video")
            });

            var videoUrl = that.attr("data-video").toString();
            var videoUrlEncoded = encodeURIComponent(videoUrl);

            //youtube
            $(".jsBlockVideo").find("iframe").first().attr("src", videoUrl);

            UpdateVK(videoUrl);
            UpdateFacebook(videoUrl);
            UpdateTwitter(videoUrl);

            e.preventDefault();
        });
        $(".popup .ico_type_close").click(function(e) {
            $(".popup").hide();

            e.preventDefault();

        });
    });

    //When page loads...
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("realty__pl-prog-link-active").show();
    $(".tab_content:first").show();

    //On Click Event
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("realty__pl-prog-link-active");
        $(this).addClass("realty__pl-prog-link-active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

    //When page loads...
    $(".realty__history-info").hide();
    $("ul.realty_history-date li:first").addClass("realty__pl-prog-link-active").show();
    $(".realty__history-info:first").show();

    //On Click Event
    $("ul.realty_history-date li").click(function() {

        $("ul.realty_history-date li").removeClass("realty__pl-prog-link-active");
        $(this).addClass("realty__pl-prog-link-active");
        $(".realty__history-info").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

    //When page loads...
    $(".realty__list-news").hide();
    $("ul.realty__pl-progress li:first").addClass("realty__pl-prog-link-active").show();
    $(".realty__list-news:first").show();

    //On Click Event
    $("ul.realty__pl-progress li").click(function() {

        $("ul.realty__pl-progress li").removeClass("realty__pl-prog-link-active");
        $(this).addClass("realty__pl-prog-link-active");
        $(".realty__list-news").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });


});

function initSlider(options){
    var settings = $.extend({}, {
        "slider" : $(".main-slider"),
        "animateSpeed" : 1000,
        "easing": "easieEaseOutCubic",
        "slideDelay": 300
        }, options),
    leftSide = $(".main-slider__left",settings.slider),
    itemsBig = $(".gallery-big .gallery-slide",settings.slider),
    bullets = $(".slider__link-block a",settings.slider),
    maxItemWidth = 0,
    itemsWidthBreakPoints = [0],
    isSliding = false;

    $(".slider__link-block a",settings.slider).eq(0).addClass('selected');

    var totalWidth = 0,
        galleryTopRightWidth = $(".gallery-top .gallery-slide").eq(0).width(),
        galleryBottomRightWidth = $(".gallery-bottom .gallery-slide").eq(0).width();
    itemsBig.each(function(){
        var thisWidth = $(this).width();
        if ( maxItemWidth < thisWidth){
            maxItemWidth = thisWidth;
        }
        totalWidth = totalWidth + thisWidth;
        itemsWidthBreakPoints.push(totalWidth);
    });
    $(".gallery-big",settings.slider).css("width",totalWidth);
    $(".gallery-top",settings.slider).css("width", $(".gallery-top .gallery-slide").size()*galleryTopRightWidth);
    $(".gallery-bottom",settings.slider).css("width", $(".gallery-bottom .gallery-slide").size()*galleryBottomRightWidth);

    setGalleryItemsWidth();
    $(window).resize(function(){
        setGalleryItemsWidth();
    });

    bullets.click(function(e){
        if (isSliding){ return false;}
        isSliding = true;
        var numToScroll = $(this).index();

        $(this).siblings('a').removeClass('selected');
        $(this).addClass('selected');

        $(".gallery-big").stop(true).animate({
            "left": - itemsWidthBreakPoints[numToScroll]
        },settings.animateSpeed, "easieEaseOutCubic");
        var t1 = setTimeout(function(){
            $(".gallery-top").animate({
                "left": -numToScroll*galleryBottomRightWidth
            },settings.animateSpeed, "easieEaseOutCubic")
        },settings.slideDelay);
        var t2 = setTimeout(function(){
            $(".gallery-bottom").animate({
                "left": -numToScroll*galleryBottomRightWidth
            },settings.animateSpeed, "easieEaseOutCubic", function(){
                isSliding = false;
            })
        },settings.slideDelay*2);

        e.preventDefault();
    });

    function setGalleryItemsWidth(){
        var leftSideWidth = leftSide.width(),
            windowWidth = $(window).width();

        leftSide.css("max-width",maxItemWidth);

        if ( leftSideWidth >= 750) {
            leftSide.css("width","auto");
        }
        if ( leftSideWidth > maxItemWidth && leftSideWidth <= (windowWidth - 250)){
            leftSide.css("width",maxItemWidth);
        } else if ( leftSideWidth >= (windowWidth - 250)){
            leftSide.css("width",windowWidth - 250);
        }
        if ( leftSideWidth < 750) {
            leftSide.css("width","750px");
        }


    }
}