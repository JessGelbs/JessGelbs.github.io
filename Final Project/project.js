$(document).ready(function(){
    $('h3').fadeToggle(3000);
});

$('.tattoo_pic').click(function(){
    const src = $(this).attr('src');
    $('.bigimage').attr('src', src);
});

$('.menu-button').click(function(){
    $('#navi').show("fast"); 
});