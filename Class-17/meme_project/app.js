// Create a submit handler for the meme form

$(".meme-form").submit(function() {
  event.preventDefault();

  let memeInput = $(".meme-input").val();

  var xhr = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${memeInput}&api_key=TtGNnu1sbhfA0ur1ICuudu3A3s9OifJO&limit=5`);
  xhr.done(function(data) {
    console.log(data.data);
    data.data.forEach(function(element, index){
      $('.meme-list').append(`<li><video src= '${element.images.looping.mp4}' type="video/mp4" autoplay></video></li>`);
      console.log(element);
    })
  });

  
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
