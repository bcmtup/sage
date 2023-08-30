window.addEventListener('DOMContentLoaded', function() {
    var el, val, res, status;
    var a, b, c, d, e;

    if ($(".communityArticles__content")) {
        var communityArticlesOwl = $(".communityArticles__content");

        communityArticlesOwl.owlCarousel({
            autoplay: true,
            autoplayTimeout: 25000,
            smartSpeed: 1000,
            items: 1,
            margin: 25,
            loop: true,
            nav: true,
            dots: false,
        });

        $('.communityArticles__prev').click(function() {
            communityArticlesOwl.trigger('next.owl.carousel', [1000]);
        });

        $('.communityArticles__next').click(function() {
            communityArticlesOwl.trigger('prev.owl.carousel', [1000]);
        });

    }

    $('.status-panel__digest').slideDown(500);

    var digestOwl = $('.status-panel__digest-list');
    digestOwl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 50000,
        smartSpeed: 500,
        items: 1,
        margin: 20,
        loop: true,
        nav: false,
        dots: false,
    });

    $('.status-panel__digest__prev').click(function() {
        digestOwl.trigger('next.owl.carousel', [300]);
    })

    $('.status-panel__digest__next').click(function() {
        digestOwl.trigger('prev.owl.carousel', [300]);
    })


    // if(typeof config.user.isAuthSecure !== 'undefined') {
    //     var i = 0;
    //     var repeat = setInterval(function() {
    //         if(typeof web3 !== 'undefined') {
    //             (i > 20 || web3.eth.coinbase || config.user.isAuthSecure) && clearInterval(repeat);
    //             if(config.user.isAuthSecure || web3.eth.coinbase == config.user.address) {
    //                 $('.reflink-visible').removeClass('d-none').addClass('d-inline');
    //                 $('.reflink-flex').removeClass('d-none').addClass('d-flex');
    //                 $('.reflink-hidden').removeClass('d-inline').addClass('d-none');
    //             } else {
    //                 $('.reflink-visible').removeClass('d-inline').addClass('d-none');
    //                 $('.reflink-flex').removeClass('d-flex').addClass('d-none');
    //                 $('.reflink-hidden').removeClass('d-none').addClass('d-inline');
    //             }
    //         } else if(i > 20) {
    //             clearInterval(repeat);
    //         }
    //         i++;
    //     }, 500)
    // }

    $('.token-sync__frx').click(function() {
        contract = new Contract('Token.FRX');
        var sync = $('.token-sync__frx > i');
        sync.addClass('fa-spin');
        contract.FRXBalance().then(function(amount) {
            if (amount > 0) {
                amount = amount / 1000000;
                amount = amount.toFixed(2);
            }
            $('.token-available__frx').text(amount);
            cookie('balance_frx', amount, {
                expires: 31104000
            }); // 360 days
            sync.removeClass('fa-spin');
        }, function(error) {
            cookie('balance_frx', 0, {
                expires: 31104000
            }); // 360 days
            sync.removeClass('fa-spin');
        });
    });

    $('.OpenGiftBtn').click(function() {
        $('.firstWinG').css("display", "none");
        $('.secWinG').css("display", "block");
        setTimeout(showGift, 6000);
    });
    $('.getGift').click(function() {
        $('.getGift').css("display", "none");
    });

    function showGift() {
        $('.secWinG').css("display", "none");
        $('.thWinG').css("display", "flex");
        clearInterval(showGift);
    }

    $('[data-fancybox]').fancybox({
        touch: false,
        mobile: {
            touch: {
                vertical: true,
                momentum: true
            }
        }
    });

    // Навигация по реинвестам
    el = document.querySelector('#changeCurrentReinvest');
    if (el) {
        el.onchange = function(e) {
            let i = this.value;
            let link = window.location.pathname;
            if (i >= 0) {
                link += $_GET({
                    reinvest: i
                }, true);
            }
            window.location = link;
        }
    }

    // Замаскировать ID юзера, слева в разделе
    $('.status-panel__user-id').click(function() {
        // Запомнить выбор значения в хранилище
        status = storageTrigger(
            'user.id',
            true
        );
        // Скрыть, показать партнерскую ссылку
        // el = $('.trigger_value__user-refkey');
        // res = '';
        // if(status == '1') {
        //     res = config.site.protocol + config.site.domain + `/i/***/`;
        // } else {
        //     res = el.attr('title');
        // }
        // el.find('input').val(res);
    });

    // // Новостная лента
    // $('.newsletter').owlCarousel({
    //     autoplay: true,
    //     autoplayTimeout: 3500,
    //     // animateOut: 'slideOutDown',
    //     // animateIn: 'flipInX',
    //     items:1,
    //     margin:30,
    //     stagePadding:0,
    //     smartSpeed:450,
    //     loop: true,
    //     mouseDrag: true,
    //     touchDrag: true,
    //     startPosition: 0,
    //     dots: true,
    //     // nav: true,
    //     // navText: ['<','>'],
    // });

    /*  */
    // let body = $('div');
    // let body = document.querySelector('body');

    // console.log(body)
});

const userAddress = document.querySelector('div.trigger_value__user-address');

userAddress.addEventListener('copy', function(e) {
    var address = $('.trigger_value__user-address'),
        longAdd = address.find('#longAdd').val();

    e.clipboardData.setData("Text", longAdd);
    e.preventDefault();
});