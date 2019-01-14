$(document).ready(function () {
    var photonumber = 0;
    var totalphotos = $('.gallerythumbs a').length;
    $('.gallerythumbs a').click(function () {
        var gallerypic = $(this).attr("href");
        $('.gallery-big img').attr('src', gallerypic);
        photonumber = $('.gallerythumbs a').index(this);
        return false;
    });
    $('.gallery-big a').click(function () {

        if ($(this).hasClass('gallery-prev')) {
            photonumber = photonumber - 1;
            if (photonumber < 0) {
                photonumber = totalphotos - 1;
            }
        } else {
            photonumber = photonumber + 1;
            if (photonumber == totalphotos) {
                photonumber = 0;
            }
        }
        var gallerypic = $('.gallerythumbs a:eq(' + photonumber + ')').attr("href");
        $('.gallery-big img').attr('src', gallerypic);
        return false;
    });

});