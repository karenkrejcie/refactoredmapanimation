// This array contains the coordinates for all bus stops between MIT and Harvard

const busStops = [
    [-96.8075467, 32.7762167],
    [-96.80053, 32.781916],
    [-96.833221, 32.821808],
    [-96.851349, 32.848152],
  ];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyZW5rcmVqY2llIiwiYSI6ImNsMzI3d2NjdjAxYnIzY3BhNTZudHB6N2oifQ.LdJzpe3_iXhjl2fiby-atg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-96.8075467, 32.7762167],
  zoom: 10,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
 var marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
    marker.setLngLat(busStops[counter])
    marker.addTo(map);
    counter++;
    setTimeout(move,1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
