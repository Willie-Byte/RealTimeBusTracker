mapboxgl.accessToken = 'pk.eyJ1Ijoia2VuamFjayIsImEiOiJjbHQ0andpZXkwNDc4Mm1wYTVpOXZuZm0zIn0.juB6CBVzW7JLLqzyup_J3g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

// Add a marker to the map
var marker = new mapboxgl.Marker()
    .setLngLat([-71.104081, 42.365554])
    .addTo(map);

// Function to move the marker
function moveMarker() {
    // Example new position
    var newPosition = [-71.102, 42.366];
    marker.setLngLat(newPosition);
    map.flyTo({center: newPosition});
}

// Simulate moving the marker every 2 seconds
setInterval(moveMarker, 2000);
