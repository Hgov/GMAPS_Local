'use strict';

var Google = Google || {};

Google.MapLoader = (function () {
    let map = null;
    let latLng = { lat: 0, lng: 0 };

    function initMap(lat, lng) {
        latLng = { lat: lat, lng: lng };
        map = new google.maps.Map(document.getElementById('map'), {
            center: latLng,
            zoom: 6,
            panControl: false,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            rotateControl: false,
            gestureHandling: "greedy",
            zoomControl: true,
        });

        // Settings elemanını haritanın üzerine ekle
        const settingsElement = document.getElementById('settingsContainer'); // Ayar butonlarının bulunduğu div
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(settingsElement);
        // Filtreleme elemanını haritanın üzerine ekle
        const filterElement = document.getElementById('filterContainer'); // Filtrelerin bulunduğu div
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(filterElement);
    }

    return {
        initMap: initMap,
        getMap: function () { return map; },
        getLatLng: function () { return latLng; },
        setLatLng: function (lat, lng) { latLng = { lat: lat, lng: lng }; }
    };
})();
