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

            secondFunction(inp2, inp1);
       
    }

  function secondFunction(date , place){
    var date1 = date;
    var deptAirport = place;
    var arrAirport = place;


    var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=" + date1 + "&departureAirport=" + place + "&arrivalAirport=JFK&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";
    //var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=2016-02-20&departureAirport=ATL&arrivalAirport=GRB&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";
    // var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=" + date + "&departureAirport=" + deptAirport + "&arrivalAirport=" + arrAirport + "&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";

      
     $.get(url,function(res) {
        var fares = [];
         var flight = [];
         var airCode = [];
         var airLocation = [];
         var depTime = [];
         var distance = [];
         var segments = [];
         var data1 = [];   
         for (i = 0; i < res.offers.length; i++) {
            var totalDistance = 0;

            fares.push(res.offers[i].totalFare);
            var s = (res.legs[i].segments.length) - 1;


           flight.push(res.legs[i].segments[s].airlineCode + 
                        res.legs[i].segments[s].flightNumber);
           airCode.push(res.legs[i].segments[s].arrivalAirportCode);
           airLocation.push(res.legs[i].segments[s].arrivalAirportLocation);
           depTime.push(res.legs[i].segments[s].departureTime);
           // distance.push(res.legs[i].segments[s].distance);
           segments.push(s + 1);

           for (s; s >= 0; s--) {
            totalDistance += res.legs[i].segments[s].distance;
           }
            distance.push(totalDistance + " mi");
         }


        data1["fares"] = fares;
        data1["flight"] = flight;
        data1["airCode"] = airCode;
        data1["airLocation"] = airLocation;
        data1["depTime"] = depTime;
        data1["distance"] = distance;
        data1["segments"] = segments;

          buildTable(data1);
          // keepData()
     });
 // function keepData()
        // console.log(data.distance);
        // data("fares") = fares;
                    // for(int i=0;i<airCode.length;i++) {
                    //     var x = airCode(i);
                    // }
        //             var airCodetemp = [];
       // buildTable(data1);
//         function buildTable(data) {
//             for (var i = 1; i < 6; i++) {
//                 document.getElementById("a" + i).innerHTML = data.airCode[i];
//                 document.getElementById("b" + i).innerHTML = data.flight[i];
//                 document.getElementById("c" + i).innerHTML = data.airLocation[i];
//                 document.getElementById("d" + i).innerHTML = data.depTime[i];
//                 document.getElementById("e" + i).innerHTML = data.distance[i];
//                 document.getElementById("f" + i).innerHTML = data.fares[i*6];
//         //     for (var key in data) {
//         //       if (data.hasOwnProperty(key)) {
//         //         airCodetemp.push(data[key]);

//         //       }
//             // }
//         // for (i=1;i<5;i++) {
//             // console.log(airCodetemp[i]);
//                 // document.getElementById("a" + i).innerHTML = airCodetemp[i[key]];

            
                   

//     };
// }

}

function buildTable(data) {
            for (var i = 1; i < 6; i++) {
                document.getElementById("a" + i).innerHTML = data.airCode[i];
                document.getElementById("b" + i).innerHTML = data.flight[i];
                document.getElementById("c" + i).innerHTML = data.airLocation[i];
                document.getElementById("d" + i).innerHTML = data.depTime[i];
                document.getElementById("e" + i).innerHTML = data.segments[i];
                document.getElementById("f" + i).innerHTML = data.distance[i];
                document.getElementById("g" + i).innerHTML = data.fares[i];
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
