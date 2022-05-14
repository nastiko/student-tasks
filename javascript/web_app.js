class Menu {
    makeSticky() {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                // make sticky nav bar
                $(".nav-scroll").addClass("scroll-sticky");
                //icons from Bootstrap
                $(".basket-icon").addClass("text-black");
                // swap nav bar color
                $(".nav-hided").addClass("nav-sticky");
                // swap logo text background
                $(".logo img:eq(0)").removeClass("visible");
                $(".logo img:eq(1)").addClass("visible");
            } else {
                // remove sticky nav bar
                $(".nav-scroll").removeClass("scroll-sticky");
                //icons from Bootstrap
                $(".basket-icon").removeClass("text-black");
                // remove sticky from nav
                $(".nav-hided").removeClass("nav-sticky");
                // remove logo text background
                $(".logo img:eq(0)").addClass("visible");
                $(".logo img:eq(1)").removeClass("visible");
            }
        });
    }
}

class Calendar {
    initNext() {
        $('.button-next .next').click(function () {
            let elNow = $('.form-block.show');
            let elNext = elNow.next();
            if (elNext && elNext.length) {
                elNow.removeClass("show");
                elNext.addClass("show");
            }
        });
    }

    initPrev() {
        $('.button-next .prev').click(function () {
            let elNow = $('.form-block.show');
            let elPrev = elNow.prev();
            if (elPrev && elPrev.length) {
                elNow.removeClass('show');
                elPrev.addClass('show');
            }
        });
    }
}

class AddItem {
    clickButton() {
        $('.show-button').click(function () {

        })
    }
}

class MobileMenu {
    slideLeft() {
        $('.basket-link').on ('click', function () {
            $("#mySidenav").animate({
                width: '100%'
            }, "fast");
        });
    }

    slideRight() {
        $('.icon-x').on ('click', function () {
            $("#mySidenav").animate({
                width: '0%'
            }, "fast");
        });
    }
}
