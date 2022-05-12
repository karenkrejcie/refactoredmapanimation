// This array contains the coordinates for all bus stops between downtown Dallas to Love Field Airport
const busStops = [
  [32.7762167, -96.8075467],
  [32.781916, -96.80053],
  [32.821808, -96.833221]
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyZW5rcmVqY2llIiwiYSI6ImNsMzI3d2NjdjAxYnIzY3BhNTZudHB6N2oifQ.LdJzpe3_iXhjl2fiby-atg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [32.7762167, -96.8075467],
  zoom: 12,
});

/*
//flights
map.on('load',function(){

    var locations = [];
    locations = getDivertedFlights();
    locations.data.forEach((location,i) =>{
        console.write(location);
        locations.push({
            "type": "Feature",
            "properties":{
                "dbh": (60*(Math.random()))
            },
            "geometry":{
                "type":"Point",
                "coordinates":[location[3],location[4]]
            }
        })
    });

    const geojson = {
        "type": "FeatureCollection", "features": locations}
        map.addSource('location',{
            "type": "geojson",
            "data": geojson
        })
    

    map.addSource('flights', {
        'type': 'geojson',
        'data': geojson
    });

    map.addLayer(
        {
            'id': 'flights-heat',
            'type': 'heatmap',
            'source': 'flights',
            'maxzoom': 9,
            'paint': {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'delay'],
            0,
            0,
            6,
            1
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            1,
            9,
            3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(33,102,172,0)',
            0.2,
            'rgb(103,169,207)',
            0.4,
            'rgb(209,229,240)',
            0.6,
            'rgb(253,219,199)',
            0.8,
            'rgb(239,138,98)',
            1,
            'rgb(178,24,43)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            2,
            9,
            20
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0
            ]
            }
            },
            'waterway-label'
            );
             
            map.addLayer(
            {
            'id': 'flights-point',
            'type': 'circle',
            'source': 'flights',
            'minzoom': 7,
            'paint': {
            // Size circle radius by flight magnitude and zoom level
            'circle-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            ['interpolate', ['linear'], ['get', 'delay'], 1, 1, 6, 4],
            16,
            ['interpolate', ['linear'], ['get', 'delay'], 1, 5, 6, 50]
            ],
            // Color circle by flight magnitude
            'circle-color': [
            'interpolate',
            ['linear'],
            ['get', 'delay'],
            1,
            'rgba(33,102,172,0)',
            2,
            'rgb(103,169,207)',
            3,
            'rgb(209,229,240)',
            4,
            'rgb(253,219,199)',
            5,
            'rgb(239,138,98)',
            6,
            'rgb(178,24,43)'
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            // Transition from heatmap to circle layer by zoom level
            'circle-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            0,
            8,
            1
            ]
            }
            },
            'waterway-label'
            );
            });

async function getDivertedFlights(){
    const url = 'http://api.aviationstack.com/v1/flights?access_key=1545edb1a12e35d4403fe721a72e3002&dep_iata=BOS'
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}*/

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
