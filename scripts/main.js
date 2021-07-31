requirejs.config({
  baseUrl: 'scripts/lib',
  paths: {
    app: '../app',
    leaflet: 'leaflet/leaflet'
  }
});
requirejs(['app/map'], function(map){

});