
$( document ).ready(function() {

   $('head').append('<link rel="stylesheet" href="https://spazione.github.io/grids/assets/css/grids.css" type="text/css" />');


   $("body").append("\
\
      <p style='font-family:arial; !important; display:block; position:fixed;z-index:6000;right:1em;bottom:.5em; opacity:0.5; text-trasform:uppercase;'>\
\
         <button style='font-size:11px' id='golden-add' class='add btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> golden On</button>\
         <button style='font-size:11px' id='golden-remove' class='remove btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> golden Off</button>\
\
         <button style='font-size:11px' id='lineheight-add' class='add btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Lineheight On</button>\
         <button style='font-size:11px' id='lineheight-remove' class='remove btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Lineheight Off</button>\
\
         <button style='font-size:11px' id='cols-add' class='add btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Cols On</button>\
         <button style='font-size:11px' id='cols-remove' class='remove btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Cols Off</button>\
\
         <button style='font-size:11px' id='focus-add' class='add btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Focus On</button>\
         <button style='font-size:11px' id='focus-remove' class='remove btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> Focus Off</button>\
\
         <button style='font-size:11px' id='h-hexagones-add' class='add btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> H-Hexagons On</button>\
         <button style='font-size:11px' id='h-hexagones-remove' class='remove btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> H-Hexagons Off</button>\
\
         <button style='font-size:11px' id='v-hexagones-add' class='add btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> V-Hexagons On</button>\
         <button style='font-size:11px' id='v-hexagones-remove' class='remove btn btn-xs btn-primary'><span class='glyphicon glyphicon-off' aria-hidden='true'></span> V-Hexagons Off</button></p>\
");

// GOLDEN
// =============================================

// ADD Lineheight
   $('#golden-add').click(function() {
      var docHeight = $(document).height();
      $("body").append("<div id='golden'></div>");
      $("#golden")
         .height(docHeight)
         // .css({'height' : '100vh','opacity' : 1, 'position': 'fixed', 'top': 0, 'left': 0, 'width': '100%', 'z-index': 5000 });
         .css({'opacity' : 0.4, 'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'z-index': 5000 });
   });

// REMOVE Lineheight
   $('#golden-remove').click(function() {$("#golden").remove(); });

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
      $("body").append("<div id='cols' class='container-fluid'></div>");
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
      $("body").append("<div id='focus' class='container-fluid'></div>");
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
      $("body").append("<div id='h-hexagones' class='container-fluid'></div>");
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
      $("body").append("<div id='v-hexagones' class='container-fluid'></div>");
      $("#v-hexagones")
         .height(docHeight)
         .css({'opacity' : 1, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'margin-left': 'auto', 'margin-right': 'auto', 'z-index': 5000 });
   });

// REMOVE H-Hexagons
   $('#v-hexagones-remove').click(function() {$("#v-hexagones").remove(); });

});





