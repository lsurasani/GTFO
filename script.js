 mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1a29zZTEyIiwiYSI6ImNpa2F0N2dvZDBsejV1eGt1bXRwcjMxdWsifQ.lCB8nj4nEEf2vmiXcWkqSw';


        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
        // center: [-84.39, 33.755], // starting position
        zoom: 0,// starting zoom
        interactive:false
        });


    function keydownFunction() {
    	var atlc = [-84.39, 33.755];
    	var laxc = [-118.4081, 33.9425];
        var in1 = document.getElementById("in1_txt").value;
        var in2 = document.getElementById("in2_day").value;
        in1 = in1.toString();
        in2 = in2.toString();
        alert(in2)

        if (event.keyCode == 13){
            if (in1.length != 3) {
                alert("Please enter a valid 3 letter symbol FUCKER BOY");
            }
            else {
            	if (in1 == "atl") {
            		x = atlc[0];
            		y = atlc[1];
            	}
            	else if (in1 == "lax") {
            		x = laxc[0];
            		y = laxc[1];
            	}
                            map.easeTo({
                            center: [x, y],
                            zoom: 9,
                            duration: 3000
                        });
                            var a = document.getElementById("in1_txt")
                            var b = document.getElementById("in1")

                            // setTimeout(a.style.display="none",5000);	
                            // setTimeout(b.style.display="none",5000);

            }
    	}
	}


