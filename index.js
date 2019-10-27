$(function(){

    $('.real-botton').click(function(){

        $('.active').removeClass('active');
        
        if($(this).hasClass('go')){
            $('.active').next().addClass('active');
        }else{
            $('.active').prev().addClass('active');
        }
    });

});