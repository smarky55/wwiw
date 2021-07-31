define(['leaflet'], function (L) {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic21hcmt5NTUiLCJhIjoiY2tycm40dG1nMGJheTJycWVlZ3hxbHFpYSJ9._2Hk3amGiL6SY2kAzF7O3w'
    }).addTo(mymap);

    return {L, mymap};
})