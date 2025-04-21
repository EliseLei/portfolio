function menu() {
    $('.btn-burger').click(function(){
        if($('.main-menu').css('left') == '0px'){
            $(this).removeClass('close').addClass('open');
            $('.main-menu, .menu-mobile-fond').animate({'left':'-100%'}, {duration:'fast'});

        } else {
            $(this).removeClass('open').addClass('close');
            $('.main-menu, .menu-mobile-fond').animate({'left':0}, {duration:'fast'});
        }
     });
}

function scrollTo() {
    $('.js-scrollTo').on('click', function() {
        $('.main-menu, .menu-mobile-fond').animate({'left':'-100%'}, {duration:'fast'});
        var page = $(this).attr('href');
        var speed = 750; 
        $('html, body').animate( { scrollTop: $(page).offset().top -70 }, speed ); 
        return false;
    });
}


menu();
scrollTo();