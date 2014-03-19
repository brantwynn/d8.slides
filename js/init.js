$(document).ready(function() {
  // 
  $(".auto").each(function() {
    var nextX = parseInt($(this).prev().attr('data-x')) + $(window).width();
    $(this).attr('data-x', nextX);
  });

  // Set up impress.js
  if ("ontouchstart" in document.documentElement) {
    $(".hint").html("<p>Tap on the left or right to navigate</p>");
  }
  impress().init();
});
