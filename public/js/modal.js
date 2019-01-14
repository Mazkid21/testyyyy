$(function () {
    // $('.button').click(function () {
    //     console.log("hii");

    // })
    setTimeout(function () {
        var buttonId = $('.button').attr('id');
        $('#modal-container').removeAttr('class').addClass("two");
        $('body').addClass('modal-active');
    }, 3000);
    $('#close-x').click(function () {
        $('#modal-container').addClass('out');
        $('body').removeClass('modal-active');
    });
})();