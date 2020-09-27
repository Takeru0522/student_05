var _window = $(window),
    _header = $('.sf,.pc'),
    headerBottom;
 
_window.on('scroll',function(){     
    headerBottom = $('header').height();
    if(_window.scrollTop() > headerBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
 



$('.drawer-item5 , .pc-top').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);    
});


$('.drawer-item1 , .pc-ga').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 800);    
});

$('.drawer-item2 , .pc-wo').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 800);    
});

$('.drawer-item3 , .pc-pr').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top
    }, 800);    
});

$('.drawer-item4 , .pc-con').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);    
});




      
