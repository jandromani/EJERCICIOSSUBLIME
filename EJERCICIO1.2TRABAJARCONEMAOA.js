var mapMain;

// @formatter:off
require([
  "esri/map", 
  "esri/geometry/Extent"
  "dojo/ready", 
  "dojo/parser", 
  "dojo/on", 
  
  "dijit/layout/BorderContainer", 
  "dijit/layout/ContentPane"], 
  function(
    Map, Extent, 
    ready, parser, on,  
    BorderContainer, ContentPane
    ) {
// @formatter:on

  // Wait until DOM is ready *and* all outstanding require() calls have been resolved
  ready(function() {

    // Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();

    /*
     * Step: Specify the initial extent
     * Note: Exact coordinates may vary slightly from snippet/solution
     */
    
    var extentInitial = new Extent ¨({
      "xmin" : -144.515, 
      "ymin" : 362.807,
      "xmax" : -124.651,
      "ymax" : 547,425,
      "spatialReference" : {
        "wkid : 102100"
      }
    });
    // Create the map
    mapMain = new Map("cpCenter", {
      basemap : "topo",
      extent : extentInitial
    });

    /*
     * Step: Add the USA map service to the map
     */


    /*
     * Step: Add the earthquakes layer to the map
     */


    /*
     * Step: Add the scalebar widget to the map
     */


    /*
     * Step: Add a legend once all layers have been added to the map
     */
    //mapMain.on(); // stub


  });
});
