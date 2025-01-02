'use strict'

// maps: https://leafletjs.com/
function createMap() {
    const map = L.map('map').setView([13.787639335950448, 100.54766081996733], 15);
    
    
    // map.style.zIndex = '1';
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <p>OpenStreetMap</p>',
        zIndex: 1,
    }).addTo(map);

    // console.log(map.getPane(map));
    
    map.getPane(map).setZIndex = -500;

    // Set zIndex to a value lower than the footer's z-index (e.g., 4)
    // map.getPanes().overlayPane.style.zIndex = 4;
    

    const marker = L.marker([13.787639335950448, 100.54766081996733]).addTo(map);
    marker.bindPopup("<div id='map-popup'>HIDEOUT</div>").openPopup();


    // map.getPane(tileLayer).setZIndex = 1;

    // map.getPane(map.tileLayer).setZIndex = 1;
}

export { createMap }




