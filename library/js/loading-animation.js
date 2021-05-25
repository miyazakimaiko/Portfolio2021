$(window).on('load',function(){
    $("#splash-logo").delay(900).fadeOut('slow');
  
    $("#splash").delay(1000).fadeOut('slow',function(){
        $('body').addClass('appear');
    });
});