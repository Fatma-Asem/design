$(document).ready(function() {
    //nice scroll
    $('html').niceScroll();

    $('.carousel').carousel({
        interval: 6000
    })

    //start scroll-top
    var scrollButton = $('#scroll-top');
    $(window).scroll(function() {
        //console.log($(this).scrollTop());

       /* if( $(this).scrollTop() >= 930) {
           scrollButton.fadeIn(1000);
        } else {
            scrollButton.hide(); 
        }*/

      $(this).scrollTop() >= 930?  scrollButton.fadeIn(1000) : scrollButton.hide(); 
         })

    scrollButton.click(function() {
        $('html,body').animate({scrollTop:0}, 600);
    })
})

//start loading secion
$(window).load(function() {
    $('.loading-overlay .spinner').fadeOut(2000, function() {
        $('body').css('overflow','auto');
        $(this).parent().fadeOut(2000, function() {
            $(this).remove();
        });
    });
})
