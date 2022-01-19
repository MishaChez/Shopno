$(document).ready(function () {
    $('a.myLinkModal1').click(function (event) {
        event.preventDefault();
        $('#myOverlay1').fadeIn(297, function () {
            $('#myModal1')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close1, #myOverlay1').click(function () {
        $('#myModal1').animate({opacity: 0}, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay1').fadeOut(297);
            });
    });
});

$(document).ready(function () {
    $('a.myLinkModal2').click(function (event) {
        event.preventDefault();
        $('#myOverlay2').fadeIn(297, function () {
            $('#myModal2')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close2, #myOverlay2').click(function () {
        $('#myModal2').animate({opacity: 0}, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay2').fadeOut(297);
            });
    });
});

$(document).ready(function () {
    $('a.myLinkModal3').click(function (event) {
        event.preventDefault();
        $('#myOverlay3').fadeIn(297, function () {
            $('#myModal3')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close3, #myOverlay3').click(function () {
        $('#myModal3').animate({opacity: 0}, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay3').fadeOut(297);
            });
    });
});

$(document).ready(function () {
    $('a.myLinkModal4').click(function (event) {
        event.preventDefault();
        $('#myOverlay4').fadeIn(297, function () {
            $('#myModal4')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close4, #myOverlay4').click(function () {
        $('#myModal4').animate({opacity: 0}, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay4').fadeOut(297);
            });
    });
});

$(document).ready(function () {
    $('a.myLinkModal5').click(function (event) {
        event.preventDefault();
        $('#myOverlay5').fadeIn(297, function () {
            $('#myModal5')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close5, #myOverlay5').click(function () {
        $('#myModal5').animate({opacity: 0}, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay5').fadeOut(297);
            });
    });
});

$(document).ready(function () {
    $('a.myLinkModal6').click(function (event) {
        event.preventDefault();
        $('#myOverlay6').fadeIn(297, function () {
            $('#myModal6')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#myModal__close6, #myOverlay6').click(function () {
        $('#myModal6').animate({opacity: 0}, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay6').fadeOut(297);
            });
    });
});