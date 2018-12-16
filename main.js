$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.lenght){
            currentImg.removeClass('active').css('display', none);
            nextImg.addClass('active').css('display', inline-block);
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.lenght){
            currentImg.removeClass('active').css('display', none);
            prevImg.addClass('active').css('display', inline-block);
        }
    });
});