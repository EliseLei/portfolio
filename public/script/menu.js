function menu() {
    $('.btn-burger').click(function(){
        if($('.main-menu').css('left') == '0px'){
            $(this).removeClass('close').addClass('open');
            $('.main-menu, #background-mobile').animate({'left':'-100%'}, {duration:'fast'});

        } else {
            $(this).removeClass('open').addClass('close');
            $('.main-menu, #background-mobile').animate({'left':0}, {duration:'fast'});
        }
     });
}

function scrollTo() {
    $('.js-scrollTo').on('click', function() {
        $('.main-menu, #background-mobile').animate({'left':'-100%'}, {duration:'fast'});
        var page = $(this).attr('href');
        var speed = 750; 
        $('html, body').animate( { scrollTop: $(page).offset().top -70 }, speed ); 
        return false;
    });
}


menu();
scrollTo();