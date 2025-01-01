'use strict'

// maps: https://leafletjs.com/
function createMap() {
    let map = L.map('map').setView([13.787639335950448, 100.54766081996733], 16.5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([13.787639335950448, 100.54766081996733]).addTo(map);
    marker.bindPopup("<div id='map-popup'><h3><b>HIDEOUT</h3></b>Bar & Restaurant</div>").openPopup();
}

export { createMap }




