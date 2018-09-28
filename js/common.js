(function($){

$(document).ready(function() {
    var icon = $('.menu-button');
        $(icon).on('click',function(e){
            e.preventDefault();
            $('.main-menu ul').slideToggle(400);
            $('.menu-button').toggleClass('active');
        });
        /* при изменении размера окна убирается класс active у .menu-button*/
 $(window).resize(function() {     
        if (  $(window).width() > 992 ) {           
            $('.menu-button').removeClass('active');
            $('.main-menu ul').css({'display':''});
        }
    });
});
var owl = $(".slider");
owl.owlCarousel({
    loop: true,
    margin:50,
    center: true,
    items:1,
    itemClass: "item-slider",
    loadedClass:"sliderLoadedClass",
    dragClass:"sliderDragClass",
    stageClass:"sliderStageClass",
    stageOuterClass:"sliderStageOuterClass",
    nav: false,
    dotsClass:"sliderDotsClass",
    dotClass: "sliderDotClass",
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});

$('body').on('click', '#politika', function(){
    if ($(this).is(':checked')) {
        $('.soglasie').show(100);
    } else {
        $('.soglasie').hide(100);
    }
});    
$('body').on('click', '#soglasie', function(){
    if ($(this).is(':checked')) {
        $('#send').show(100);
    } else {
        $('#send').hide(100);
    }
});   


})(jQuery);