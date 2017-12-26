
$( document ).ready(function() {

   $('head').append('<link rel="stylesheet" href="https://spazione.github.io/grids/assets/css/grids.css" type="text/css" />');


   $("body").append("\
\
      <p style='font-family:arial; font-size:11px !important; display:block; position:fixed;z-index:6000;right:1em;bottom:.5em; font-size:1em; opacity:0.5; text-trasform:uppercase;'>\
\
         <a id='lineheight-add' class='add'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Lineheight On</a>\
         <a id='lineheight-remove' class='remove'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Lineheight Off</a>\
\
         <a id='cols-add' class='add'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Cols On</a>\
         <a id='cols-remove' class='remove'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Cols Off</a>\
\
         <a id='focus-add' class='add'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Focus On</a>\
         <a id='focus-remove' class='remove'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Focus Off</a>\
\
         <a id='h-hexagones-add' class='add'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> H-Hexagons On</a>\
         <a id='h-hexagones-remove' class='remove'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> H-Hexagons Off</a>\
\
         <a id='v-hexagones-add' class='add'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> V-Hexagons On</a>\
         <a id='v-hexagones-remove' class='remove'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> V-Hexagons Off</a></p>\
");



// LINEHEIGHT
// =============================================

// ADD Lineheight
   $('#lineheight-add').click(function() {
      var docHeight = $(document).height();
      $("body").append("<div id='lineheight'></div>");
      $("#lineheight")
         .height(docHeight)
         .css({'opacity' : 0.4, 'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'z-index': 5000 });
   });

// REMOVE Lineheight
   $('#lineheight-remove').click(function() {$("#lineheight").remove(); });


// COLUMS
// =============================================

// ADD Cols
   $('#cols-add').click(function() {
      var docHeight = $(document).height();
      $("body").append("<div id='cols' class='container'></div>");
      $("#cols")
         .height(docHeight)
         .css({'opacity' : 1, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'margin-left': 'auto', 'margin-right': 'auto', 'z-index': 5000 });
   });

// REMOVE Cols
   $('#cols-remove').click(function() {$("#cols").remove(); });


// FOCUS
// =============================================

// ADD Focus
   $('#focus-add').click(function() {
      var docHeight = $(document).height();
      $("body").append("<div id='focus' class='container'></div>");
      $("#focus")
         .height(docHeight)
         .css({'opacity' : 1, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'margin-left': 'auto', 'margin-right': 'auto', 'z-index': 5000 });
   });

// REMOVE Focus
   $('#focus-remove').click(function() {$("#focus").remove(); });


// H-HEXAGONS
// =============================================

// ADD H-Hexagons
   $('#h-hexagones-add').click(function() {
      var docHeight = $(document).height();
      $("body").append("<div id='h-hexagones' class='container'></div>");
      $("#h-hexagones")
         .height(docHeight)
         .css({'opacity' : 1, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'margin-left': 'auto', 'margin-right': 'auto', 'z-index': 5000 });
   });

// REMOVE H-Hexagons
   $('#h-hexagones-remove').click(function() {$("#h-hexagones").remove(); });


// V-HEXAGONS
// =============================================

// ADD V-Hexagons
   $('#v-hexagones-add').click(function() {
      var docHeight = $(document).height();
      $("body").append("<div id='v-hexagones' class='container'></div>");
      $("#v-hexagones")
         .height(docHeight)
         .css({'opacity' : 1, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'margin-left': 'auto', 'margin-right': 'auto', 'z-index': 5000 });
   });

// REMOVE H-Hexagons
   $('#v-hexagones-remove').click(function() {$("#v-hexagones").remove(); });

});





