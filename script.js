 mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1a29zZTEyIiwiYSI6ImNpa2F0N2dvZDBsejV1eGt1bXRwcjMxdWsifQ.lCB8nj4nEEf2vmiXcWkqSw';


        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
        center: [-84.39, 33.755], // starting position
        zoom: 0,// starting zoom
        interactive:false
        });


        var inp1;
        var inp2;
 function keydownFunction() {
        var atlc = [-84.39, 33.755];
        var laxc = [-118.4081, 33.9425];
        var jfkc = [-73.7789,40.639];
        inp1 = document.getElementById("in1_txt").value;
        window.inp2 = document.getElementById("in2_day").value;
       
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
        
        inp1 = inp1.toString().toUpperCase();
        window.inp2 = inp2.toString();

        var day1 = new Date(today);
        var day2 = new Date(inp2);

            if (inp1.length != 3) {
                alert("Please enter a valid 3 letter symbol FUCKER BOY");
                return;
            } else if (day1 > day2) {
                alert("Cannot time travel to the past!!")
                return;
            } else if (inp2 == "") {
                alert("Please enter a date!")
                return;
            }
                if (inp1 == "ATL") {

                    x = atlc[0];
                    y = atlc[1];
                }
                else if (inp1 == "LAX") {
                    x = laxc[0];
                    y = laxc[1];
                }  else if (inp1 == "JFK") {
                    x = jfkc[0];
                    y = jfkc[1];
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

                            document.getElementById("datatable").style.visibility="visible";

            
        
    }







  
    
    var date = "2016-02-09";
    var deptAirport = "ATL"
    var arrAirport = "DCA"
    
    // console.log("Heyoo");
    // var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=2016-02-09&departureAirport=ATL&arrivalAirport=GRB&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";
     var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=" + date + "&departureAirport=" + deptAirport + "&arrivalAirport=" + arrAirport + "&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";

      
     $.get(url,function(res) {
        var fares = [];
         var flight = [];
         var airCode = [];
         var airLocation = [];
         var depTime = [];
         var distance = [];
         var data1 = [];   

         console.log(res);
         for (i = 0; i < res.offers.length; i++) {
            fares.push(res.offers[i].totalFare);
           flight.push(res.legs[i].segments[0].airlineCode + 
                        res.legs[i].segments[0].flightNumber);
           airCode.push(res.legs[i].segments[0].arrivalAirportCode);
           airLocation.push(res.legs[i].segments[0].arrivalAirportLocation);
           depTime.push(res.legs[i].segments[0].departureTime);
           distance.push(res.legs[i].segments[0].distance);
         }
         data1["fares"] = fares;
          data1["flight"] = flight;
          data1["airCode"] = airCode;
         data1["airLocation"] = airLocation;
          data1["depTime"] = depTime;
          data1["distance"] = distance;
          console.log(fares);
          console.log(flight);
          console.log(airCode);
          console.log(airLocation);
          console.log(depTime);
          console.log(distance);
          buildTable(data1);
     });
        // console.log(data.distance);
        // data("fares") = fares;
                    // for(int i=0;i<airCode.length;i++) {
                    //     var x = airCode(i);
                    // }
        //             var airCodetemp = [];
        function buildTable(data) {
            for (var i = 1; i < 6; i++) {
                document.getElementById("a" + i).innerHTML = data.airCode[i];
                document.getElementById("b" + i).innerHTML = data.flight[i];
                document.getElementById("c" + i).innerHTML = data.airLocation[i];
                document.getElementById("d" + i).innerHTML = data.depTime[i];
                document.getElementById("e" + i).innerHTML = data.distance[i];
                document.getElementById("f" + i).innerHTML = data.fares[i*6];
        //     for (var key in data) {
        //       if (data.hasOwnProperty(key)) {
        //         airCodetemp.push(data[key]);

        //       }
            // }
        // for (i=1;i<5;i++) {
            // console.log(airCodetemp[i]);
                // document.getElementById("a" + i).innerHTML = airCodetemp[i[key]];

            
                   

    };
}


   

