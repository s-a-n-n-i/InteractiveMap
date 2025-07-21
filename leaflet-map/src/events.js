
map.on('mousemove', function(e) {
    const lat = e.latlng.lat.toFixed(5);
    const lng = e.latlng.lng.toFixed(5);
    document.getElementById('coordinates').innerHTML = `Lat: ${lat}, Lng: ${lng}`;
});