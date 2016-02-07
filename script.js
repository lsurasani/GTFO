 mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1a29zZTEyIiwiYSI6ImNpa2F0N2dvZDBsejV1eGt1bXRwcjMxdWsifQ.lCB8nj4nEEf2vmiXcWkqSw';


        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
        center: [-84.39, 33.755], // starting position
        zoom: 0,// starting zoom
        interactive:false
        });


    function keydownFunction() {
    	var atlc = [-84.39, 33.755];
    	var laxc = [-118.4081, 33.9425];
        var in1 = document.getElementById("in1_txt").value;
        var in2 = document.getElementById("in2_day").value;
        var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
		    dd='0'+dd
		} 

		if(mm<10) {
		    mm='0'+mm
		} 

		today = yyyy+'-'+mm+'-'+dd;
        
        in1 = in1.toString().toUpperCase();
        in2 = in2.toString();

        var day1 = new Date(today);
        var day2 = new Date(in2);

         	if (in1.length != 3) {
                alert("Please enter a valid 3 letter symbol FUCKER BOY");
                return;
            } else if (day1 > day2) {
            	alert("Cannot time travel to the past!!")
            	return;
            } else if (in2 == "") {
            	alert("Please enter a date!")
            	return;
            }
            	if (in1 == "ATL") {

            		x = atlc[0];
            		y = atlc[1];
            	}
            	else if (in1 == "LAX") {
            		x = laxc[0];
            		y = laxc[1];
            	}
                            map.easeTo({
                            center: [x, y],
                            zoom: 9,
                            duration: 7000
                        });
                            var a = document.getElementById("in1_txt")
                            var b = document.getElementById("in1")
                            document.getElementById("clicker").value = "New search"
                            document.getElementById("in1_txt").value = ""
                            // setTimeout(a.style.display="none",5000);
                            // setTimeout(b.style.display="none",5000);
                            part2();

            
    	
	}


