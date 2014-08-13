$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    //alert("mouseenter");
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    //alert("mouseleave");
  })
  .mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // animate hadouken to the right of the screen
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate({'left': '0px'},200,
      function () {
        $(this).hide();
        $(this).css('left', '661px');
     });/**/
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
  $(this).keydown(function(event) {
    if ( event.which == 88 ) {
	    $('.ryu-ready').hide();
	    $('.ryu-cool').show();
	    //alert("x key pressed");
    }   
  })
  .keyup(function(event) {
	    if ( event.which == 88 ){
	    	$('.ryu-cool').hide();
	    	$('.ryu-ready').show();
	    }
   });

 });/**/
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

/*$( "#target" ).keydown(function( event ) {
  if ( event.which == 13 ) {
   event.preventDefault();
  }
  });*/