$( function() {
  $( "#heat" ).hide();

  $( "#cassette" ).draggable({
    //axis: "y",
    disabled: false,
    cursor: "move",
    start: function( event, ui ) {
      $( this ).removeClass("glow");
    },
    stop: function( event, ui ) {

    }
  });

  $( "#target" ).droppable({
    drop: function( event, ui ) {
      $( "#cassette" ).draggable( "option", "disabled", true );
      $( document.body ).addClass("flames");
      $( "#heat" ).show();
      $( "#cassette" ).addClass("party");
      $( "#boombox" ).addClass("party");
      $( "#homie" ).text("That was some HEAT my guy!!");
      $( this ).remove();
    }
  });

} );
