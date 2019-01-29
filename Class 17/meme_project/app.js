// Create a submit handler for the meme form

$(".meme-form").submit(function() {
  event.preventDefault();

  let memeInput = $(".meme-input").val();

  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=TtGNnu1sbhfA0ur1ICuudu3A3s9OifJO&limit`=5");
  xhr.done(function(data) {
    console.log("success got data", data);
  });

  console.log(memeInput);
});

// Do all of the following inside of this submit handler function...

// Stop the page from refreshing when the form is submitted  (event.preventDefault())

// Get the value of meme-input and save as a variable

// Use the JavaScript example at https://developers.giphy.com/docs/ to get the
// results from the http://api.giphy.com/v1/gifs/search endpoint (exactly as in example) but changing in your API key (you will need to register for API key)

// Use your knowledge of objects and arrays to get the list of give memes

// Swap out Ryan Goesling for your input term using string concatenation

// Use a forEach loop to append a list element containing a video to meme-list for each meme video
// hint: <li><video src='+ looping gif image path here + ' type="video/mp4" autoplay></video></li>
