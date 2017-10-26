var images = [
  "https://static.pexels.com/photos/220421/pexels-photo-220421.jpeg",
  "https://static.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg",
  "https://static.pexels.com/photos/295821/pexels-photo-295821.jpeg",
];
var i = 0;

function showNext() {
  // if last image, start from the beginning
  if(i == images.length-1) i=0;
  // if not last image, go to next
  else i++;
  $(".background").fadeOut(1000).promise().done(function(){
    $(".background").css("background-image", "url(" + images[i] + ")").fadeIn(1000);
  })
}

function showPrev() {
  // if first image, go to last
  if(i == 0) i=images.length-1;
  // if not first image, go previous
  else i--;
  $(".background").fadeOut(800).promise().done(function() {
    $(".background").css("background-image", "url(" + images[i] + ")").delay(100).fadeIn(800);
  })
}
