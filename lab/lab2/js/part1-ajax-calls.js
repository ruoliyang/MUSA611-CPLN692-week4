var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 2
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var unparsed;
$.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
.done(function(response){
  parsed = JSON.parse(response)})
//$.ajax('').done(function(x){console.log(x)})
//theData = promise.done(console.log);
//bikeCrash = JSON.parse(theData);

parsed.map(function(obj){
  return {'lat': obj.lat_final, 'long': obj.long_final}
})

/*
var holder;
var unparsed;
$.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
.done(function(x){
  unparsed(x)})

  $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
  .done(function(response){
    parsed = JSON.parse(response)
  })
  */
// sideEffect
