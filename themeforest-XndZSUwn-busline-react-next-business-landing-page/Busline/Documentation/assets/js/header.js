

// header menu active //

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault(); /* prevent hard jump, the default behavior */

        var target = $(this).attr("href"); /* Set the target as variable */

        /* Perform animated scrolling by getting top-position of target-element and set it as scroll target */
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; /* Attach the hash (#jumptarget) to the pageurl */
        });

        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    /* Assign active class to nav links while scolling */
    $('.title').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();