$(document).ready(function(){
    $('h3').fadeToggle(3000);
});

$('.tattoo_pic').click(function(){
    const src = $(this).attr('src');
    $('.bigimage').attr('src', src);
});

$('.menu-button').click(function(){
    $('#navi').toggle("fast"); 
});

$("form").submit(function(event){
    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let subject = $('#subject').val();
    
    if (fname === ''|| lname === ''|| subject === '') {
        alert('You must enter a value!');
        event.preventDefault();
    }
  });