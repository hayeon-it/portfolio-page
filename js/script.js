    var homeHeight = $('.home').height() - 400;
    var scrollDown = $('section.about').offset().top;
    var scrollHeight = [];
    var scrollHeight2 = $('section.about').offset().top - 350;
    var scrollHeight3 = $('section.work').offset().top - 350;

    // SCROLL EVENT
    $(window).on('scroll', function () {
        scroll = $(window).scrollTop();

        // ABOUT ITEM FADE IN
        if (scroll >= scrollHeight2) {
            $('.about .item').addClass('view');
        } else if (scroll < scrollHeight2) {
            $('.about .item').removeClass('view');
        }
        // WORK ITEM FADE IN
        if (scroll >= scrollHeight3) {
            $('.work .item').addClass('view');
        } else if (scroll < scrollHeight3) {
            $('.work .item').removeClass('view');
        }
        // TOP BUTTON FADE IN
        if (scroll >= homeHeight) {
            $('.top_btn').stop().fadeIn(200);
        } else if (scroll < homeHeight) {
            $('.top_btn').stop().fadeOut(200);
        }
    })

    // TOP BUTTON CLICK EVENT
    $('.top_btn').click(function () {
        $("html, body").stop().animate({
            "scrollTop": 0
        }, 600)
    })

    // POPUP
    $('.work a.more').each(function (index) {
        $(this).click(function () {
            $('.popup' + (index + 1)).stop().fadeIn(200);
            $('.pop-bg').stop().fadeIn(300);
            $('body').addClass('not-scroll');
        })
    });

    $('.pop-bg, .close-btn').click(function () {
        $('.popup').stop().fadeOut(200);
        $('.pop-bg').stop().fadeOut(300);
        $('body').removeClass('not-scroll');
    })

    // DOWN BTN CLICK EVENT
    $('.down').click(function () {
        $("html, body").stop().animate({
            "scrollTop": scrollDown
        }, 500)
    });

    // GNB CLICK EVENT
    $('#gnb li').each(function (index) {
        scrollHeight[index] = $('section').eq(index).offset().top;
        $(this).click(function () {
            $("html, body").stop().animate({
                "scrollTop": scrollHeight[index]
            }, 500)
        })
    })
