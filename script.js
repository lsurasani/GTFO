 mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1a29zZTEyIiwiYSI6ImNpa2F0N2dvZDBsejV1eGt1bXRwcjMxdWsifQ.lCB8nj4nEEf2vmiXcWkqSw';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
center: [-84.39, 33.755], // starting position
zoom: 0,// starting zoom
interactive:false
});

var codes = ["ABR","ABI","CAK","ALS","ABY","ALB","ABQ","AEX","ABE", "AIA",
"APN","AOO","AMA","ANC","ATW","AVL","ASE","AHN", "ATL","ACY","AGS","AUG",
"AUS","BFL","BWI","BGR","BHB", "BRW","BTR","BPT","BKW","BED","BLI","BJI",
"BET","BTT", "BIL","BGM","BHM","BIS","BMI","BMG","BLF","BOI","BOS", "BZN",
"BKX","BRO","BQK","BUF","BUR","BRL","BBF","BTV", "BTM","CGI","CLD","CNM",
"CPR","CID","CMI","CHS","CRW", "CLT","CHO","CHA","CYS","CHI","MDW","CHI",
"ORD","CIC", "CVG","CKB","CLE","CVN","COD","CLL","COS","COU","CAE", "CSG",
"CLU","GTR","OLU","CMH","CDV","CRP","DAL","DFW", "DAY","DAB","DEC","DEN",
"DSM","DTW","DTT","DVL","DIK", "DLG","DDC","DHN","DUJ","DBQ","DLH","DRO",
"DUT","EAU", "EEK","IPL","ELD","ELP","EKO","ELM","WDG","ERI","ESC", "EUG",
"ACV","EVV","FAI","FAR","FMN","XNA","FAY","FLG", "FNT","FLO","FOD","FLL",
"TBN","RSW","FSM","VPS","FWA", "FYU","FAT","GNV","GCK","GCC","GDV","GFK",
"GRI","GJT", "GRR","GBD","GTF","GRB","LWB","GSO","GLH","PGV","GSP", "GPT",
"GUC","HGR","HNM","CMX","HRL","MDT","HRO","BDL", "HVR","HYS","HLN","HIB",
"HHH","HOB","HOM","HNL", "MKK","EFD","HOU","IAH","EFD","HTS","HSV",
"HON","HYA", "IDA","IND","INL","IYK","IMT","IWD","ISP","ITH","JAC", "JAN",
"MKL","JAX","OAJ","JMS","JHW","JST","JPR","JLN", "JNU","OGG","AZO","LUP",
"FCA","MCI","JHM","EAR","ENA", "KTM","EYW","GRK","AKN","IGM","IRK","LMT",
"TYS","ADQ", "LSE","LFT","LCH","Hll","LNY","LNS","LAN","LAR","LRD", "LRU",
"LAS","LBE","PIB","LAW","LAB","LWS","LEW","LWT", "LEX","LBL","LIH","LNK",
"LIT","LGB","GGG","QLA","SDF", "LBB","LYH","MCN","MSN","MHT","MHK","MBL",
"MWA","MQT", "MVY","MCW","MSS","MFE","MCK","MFR","MLB","MEM","MEI", "MIA",
"MAF","MLS","MKE","MSP","MOT","MSO","MOB","MOD", "MLI","MLU","MRY","MGM",
"MTJ","MGW","MWH","MSL","MKG", "MRY","ACK","ABF","BNA","EWN","HVN","MSY",
"LGA","JFK", "NYC","EWR","SWF","PHF","OME","ORF","OTH","LBF","OAK", "OGS",
"OKC","OMA","ONT","SNA","MCO","OSH","OWB","OXR", "PAH","PGA","PSP","PFN",
"PKB","PSC","PLN","PDT","PNS", "PIA","PHL","PHX","PIR","SOP","PIT","PIH",
"PNC","PWM", "PDX","PSM","PRC","PQI","PVD","PVC","PUB","PUW","UIN", "RDU",
"RAP","RDD","RDM","RNO","RHI","RIC","RIW","ROA", "RST","ROC","RKS","RFD",
"RKD","ROW","RUT","SMF","MBS", "SLN","SPY","SLC","SJT","SAT","SAN","QSF",
"SFO","SJC", "SBP","SDP","SBA","SAF","SMX","STS","SLK","SRQ","CIU", "SAV",
"BFF","SEA","SHD","SHR","SHV","SDY","SVC","SUX", "FSD","SIT","SGY","SBN",
"GEG","SPI","CEF","SGF","VSF", "STC","SGU","STL","PIE","SCE","SBS","SUN",
"SRY","TLH", "TPA","TAX","TXK","TVF","OOK","TOL","TOP","TVC","TTN", "TUS",
"TUL","TUP","TWF","TYR","UNK","EGE","VDZ","VLD", "VCT","VIS","ACT","ALW",
"DCA","WAS","IAD","ALO","ART", "ATY","CWA","EAT","PBI","WYS","HPN","SPS",
"ICT","AVP","IPT","ISN","ILG","ILM","OLF","WRL","WRG","YKM","YAK","YUM",
"YXX","YAA","YEK","YBG","YYC","YBL","YGR","YCG", "YYG","YMT","YYQ","YXC",
"YDF","YHD","YEG","YEO","YMM", "YYE","YXJ","YSM","YFC","YQX","YGP","YQU",
"YHZ","YHM", "YFB","YKA","YLW","YQK","YGK","YQL","YXU","YXH","YQM", "YYY",
"YMQ","YUL","YCD","YYB","YOW","YYF","YZT","YPW", "YPR","YQB","YQZ","YRT",
"YRL","YQR","YRJ","YUY","YSJ", "YZP","YZR","YXE","YAM","YZV","YXL","YYD",
"YYT","YSB", "YQY","YXT","YTH","YQT","YTS","YYZ","YTO","YTZ","YVO", "YVR",
"YYJ","YWK","YXY","YWL","YQG","YWG","YZF","LAX"];

var departAirport;
var departDate;

function keydownFunction() {
    var atlCenter = [-84.39, 33.755];
    var laxCenter = [-118.4081, 33.9425];
    var jfkCenter = [-73.7789,40.639];
    departAirport = document.getElementById("in1_txt").value;
    departDate = document.getElementById("in2_day").value;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+ 1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd < 10) { dd = '0' + dd }
    if(mm < 10) { mm = '0' + mm }
    today = yyyy + '-' + mm + '-' + dd;

    departAirport = departAirport.toString().toUpperCase();
    departDate = departDate.toString();

    var today = new Date(today);
    var leaving = new Date(departDate);

    if (departAirport.length != 3) {
        // swal("Enter a valid 3 letter symbol FUCKER BOY");
        swal({title: "ARE YOU KIDDING ME", text: "Enter a valid 3 letter symbol FUCKER BOY", imageUrl: "images/ree1.jpg" });
        return;
    } else if (today > leaving) {
        swal("CANT TIME TRAVEL TO THE PAST")
        return;
    } else if (departDate == "") {
        swal("Put in a date DUMBASS")
        return;
    }

    if (departAirport == "ATL") {
        long = atlCenter[0];
        lat = atlCenter[1];
    } else if (departAirport == "LAX") {
        long = laxCenter[0];
        lat = laxCenter[1];
    } else if (departAirport == "JFK") {
        long = jfkCenter[0];
        lat = jfkCenter[1];
    }

    map.easeTo({
    center: [long, lat],
    zoom: 9,
    duration: 7000
    });

    airportIteration()

    // var a = document.getElementById("in1_txt")
    // var b = document.getElementById("in1")
    // document.getElementById("clicker").value = "New search"
    // document.getElementById("in1_txt").value = ""
    //
    // document.getElementById("datatable").style.visibility="visible";

    //secondFunction(departDate, departAirport);

    function airportIteration() {
        for (k = 0; k < codes.length; k++) {
            secondFunction(departDate, departAirport, codes[k]);
        }
    }
}

function secondFunction(date, departure, arrival) {
    var date1 = date;
    var deptAirport = departure;
    var arrAirport = arrival;
    //console.log(arrAirport);

    var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=" + date1 + "&departureAirport=" + deptAirport + "&arrivalAirport=" + arrAirport + "&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";
    //var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=2016-02-20&departureAirport=ATL&arrivalAirport=GRB&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";
    // var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=" + date + "&departureAirport=" + deptAirport + "&arrivalAirport=" + arrAirport + "&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";

    $.get(url,function(res) {
        console.log(res);
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
            var segmentNum = (res.legs[i].segments.length) - 1;

            flight.push(res.legs[i].segments[segmentNum].airlineCode + res.legs[i].segments[segmentNum].flightNumber);
            airCode.push(res.legs[i].segments[segmentNum].arrivalAirportCode);
            airLocation.push(res.legs[i].segments[segmentNum].arrivalAirportLocation);
            depTime.push(res.legs[i].segments[segmentNum].departureTime);
            // distance.push(res.legs[i].segments[s].distance);
            segments.push(segmentNum + 1);

            for (segmentNum; segmentNum >= 0; segmentNum--) {
                totalDistance += res.legs[i].segments[segmentNum].distance;
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

          //buildTable(data1);
    });
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

    } // took out semicolon
}
