$(document).ready(function() {
  var lights = "on";
  $("#lightswitch").click(function() {
    if (lights === "on") {
      $("#lightswitch").addClass('switch-off').removeClass('switch-on');
      $("body").addClass('lights-off');
      lights = "off";
    } else {
      $("#lightswitch").addClass('switch-on').removeClass('switch-off');
      $("body").removeClass('lights-off');
      lights = "on";
    }
    $(this).html(lights);
  });
});

// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;

//can also use toggle class as $('#lightswitch').toggleClass('switch-off', 'switch-on');