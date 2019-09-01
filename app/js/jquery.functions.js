$(function () {
    $('.showForm').on('click', function (e) {
        e.preventDefault();
        $('.form--content form').show();
        $('.showForm').hide();
    });

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if ( scrollTop > 90 ) {
            $('.form--content > div').addClass("sticky");
        } else {
            $('.form--content > div').removeClass("sticky");
        }
    });

    $('.modal').each(function(){
            var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
            $('video').trigger('pause');

        });
    });

});