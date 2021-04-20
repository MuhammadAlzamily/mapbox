mapboxgl.accessToken = 'YOUR_TOKEN_HERE';


navigator.geolocation.getCurrentPosition(
    (pos)=>setupmap([pos.coords.longitude,pos.coords.latitude]),
    (err)=>{
        alert("Ok imma send u somewhere trashy then since u didn't turn on ur location");
        setupmap([-82.907120,40.417286])
    },
    {enableHighAccuracy:true}
)

function setupmap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom: 8
    });
    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );

    }