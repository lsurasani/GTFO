 mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1a29zZTEyIiwiYSI6ImNpa2F0N2dvZDBsejV1eGt1bXRwcjMxdWsifQ.lCB8nj4nEEf2vmiXcWkqSw';


        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
        center: [-84.39, 33.755], // starting position
        zoom: 0,// starting zoom
        interactive:false
        });


    function keydownFunction() {
        if (event.keyCode == 13){
            if (in1.length != 3) {
                alert(in1.length);
            }
            else {
                            map.easeTo({
                            center: [-84.39, 33.755],
                            zoom: 9,
                            duration: 3000
                        });}
    }
}


