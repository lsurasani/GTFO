 mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1a29zZTEyIiwiYSI6ImNpa2F0N2dvZDBsejV1eGt1bXRwcjMxdWsifQ.lCB8nj4nEEf2vmiXcWkqSw';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
center: [-84.39, 33.755], // starting position
zoom: 0,// starting zoom
interactive:false
});

var codes = ["ABE","ABF","ABI","ABQ","ABR","ABY","ACK","ACT","ACV","ACY","ADQ","AEX","AGS",
"AHN","AIA","AKN","ALB","ALO","ALS","ALW","AMA","ANC","AOO","APN","ART","ASE",
"ATL","ATW","ATY","AUG","AUS","AVL","AVP","AZO","BBF","BDL","BED","BET","BFF",
"BFL","BGM","BGR","BHB","BHM","BIL","BIS","BJI","BKW","BKX","BLF","BLI","BMG",
"BMI","BNA","BOI","BOS","BPT","BQK","BRL","BRO","BRW","BTM","BTR","BTT","BTV",
"BUF","BUR","BWI","BZN","CAE","CAK","CDV","CEF","CGI","CHA","CHI","CHI","CHO",
"CHS","CIC","CID","CIU","CKB","CLD","CLE","CLL","CLT","CLU","CMH","CMI","CMX",
"CNM","COD","COS","COU","CPR","CRP","CRW","CSG","CVG","CVN","CWA","CYS","DAB",
"DAL","DAY","DBQ","DCA","DDC","DEC","DEN","DFW","DHN","DIK","DLG","DLH","DRO",
"DSM","DTT","DTW","DUJ","DUT","DVL","EAR","EAT","EAU","EEK","EFD","EFD","EGE",
"EKO","ELD","ELM","ELP","ENA","ERI","ESC","EUG","EVV","EWN","EWR","EYW","FAI",
"FAR","FAT","FAY","FCA","FLG","FLL","FLO","FMN","FNT","FOD","FSD","FSM","FWA",
"FYU","GBD","GCC","GCK","GDV","GEG","GFK","GGG","GJT","GLH","GNV","GPT","GRB",
"GRI","GRK","GRR","GSO","GSP","GTF","GTR","GUC","HGR","HHH","HIB","HLN","HNL",
"HNM","HOB","HOM","HON","HOU","HPN","HRL","HRO","HSV","HTS","HVN","HVR","HYA",
"HYS","Hll","IAD","IAH","ICT","IDA","IGM","ILG","ILM","IMT","IND","INL","IPL",
"IPT","IRK","ISN","ISP","ITH","IWD","IYK","JAC","JAN","JAX","JFK","JHM","JHW",
"JLN","JMS","JNU","JPR","JST","KTM","LAB","LAN","LAR","LAS","LAW","LAX","LBB",
"LBE","LBF","LBL","LCH","LEW","LEX","LFT","LGA","LGB","LIH","LIT","LMT","LNK",
"LNS","LNY","LRD","LRU","LSE","LUP","LWB","LWS","LWT","LYH","MAF","MBL","MBS",
"MCI","MCK","MCN","MCO","MCW","MDT","MDW","MEI","MEM","MFE","MFR","MGM","MGW",
"MHK","MHT","MIA","MKE","MKG","MKK","MKL","MLB","MLI","MLS","MLU","MOB","MOD",
"MOT","MQT","MRY","MRY","MSL","MSN","MSO","MSP","MSS","MSY","MTJ","MVY","MWA",
"MWH","NYC","OAJ","OAK","OGG","OGS","OKC","OLF","OLU","OMA","OME","ONT","OOK",
"ORD","ORF","OSH","OTH","OWB","OXR","PAH","PBI","PDT","PDX","PFN","PGA","PGV",
"PHF","PHL","PHX","PIA","PIB","PIE","PIH","PIR","PIT","PKB","PLN","PNC","PNS",
"PQI","PRC","PSC","PSM","PSP","PUB","PUW","PVC","PVD","PWM","QLA","QSF","RAP",
"RDD","RDM","RDU","RFD","RHI","RIC","RIW","RKD","RKS","RNO","ROA","ROC","ROW",
"RST","RSW","RUT","SAF","SAN","SAT","SAV","SBA","SBN","SBP","SBS","SCE","SDF",
"SDP","SDY","SEA","SFO","SGF","SGU","SGY","SHD","SHR","SHV","SIT","SJC","SJT",
"SLC","SLK","SLN","SMF","SMX","SNA","SOP","SPI","SPS","SPY","SRQ","SRY","STC",
"STL","STS","SUN","SUX","SVC","SWF","TAX","TBN","TLH","TOL","TOP","TPA","TTN",
"TUL","TUP","TUS","TVC","TVF","TWF","TXK","TYR","TYS","UIN","UNK","VCT","VDZ",
"VIS","VLD","VPS","VSF","WAS","WDG","WRG","WRL","WYS","XNA","YAA","YAK","YAM",
"YBG","YBL","YCD","YCG","YDF","YEG","YEK","YEO","YFB","YFC","YGK","YGP","YGR",
"YHD","YHM","YHZ","YKA","YKM","YLW","YMM","YMQ","YMT","YOW","YPR","YPW","YQB",
"YQG","YQK","YQL","YQM","YQR","YQT","YQU","YQX","YQY","YQZ","YRJ","YRL","YRT",
"YSB","YSJ","YSM","YTH","YTO","YTS","YTZ","YUL","YUM","YUY","YVO","YVR","YWG",
"YWK","YWL","YXC","YXE","YXH","YXJ","YXL","YXT","YXU","YXX","YXY","YYB","YYC",
"YYD","YYE","YYF","YYG","YYJ","YYQ","YYT","YYY","YYZ","YZF","YZP","YZR","YZT","YZV"];

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
		// swal({title: "ARE YOU KIDDING ME", text: "Enter a valid 3 letter symbol FUCKER BOY", imageUrl: "images/ree1.jpg" });
		swal("Enter a valid 3 letter symbol");

		return;
	} else if (today > leaving) {
		swal("CANT TIME TRAVEL TO THE PAST")
		return;
	} else if (departDate == "") {
		// swal("Put in a date DUMBASS")
		swal("Put in a date")

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


	var a = document.getElementById("in1_txt")
	var b = document.getElementById("in1")
	document.getElementById("clicker").value = "New search"
	document.getElementById("in1_txt").value = ""
	
	document.getElementById("datatable").style.visibility="visible";

	airportIteration(departDate,departAirport)
	//secondFunction(departDate, departAirport);
}
	function airportIteration(date,airport) {
		var choo = [];
		var chooChoo = [];
			// choo[0] = secondFunction(departDate, departAirport, codes[0]);
		for (k = 1; k < codes.length; k++) {
		//     choo[k] = secondFunction(date, airport, codes[k]);
		//     // console.log(choo[k])
		var counter = k;
			secondFunction(departDate, departAirport, codes[k], counter)
		//     // console.log(choo[k])

		//     if (choo.fares[k] < choo.fares[k - 1]) {
		//         chooChoo[k - 1] = choo[k];
		//     }

		//     buildTable(choo);
		}
	}


function secondFunction(date, departure, arrival, counter) {
	var date1 = date;
	var deptAirport = departure;
	var arrAirport = arrival;

	var url = "http://terminal2.expedia.com:80/x/mflights/search?departureDate=" + date1 + "&departureAirport=" + deptAirport + "&arrivalAirport=" + arrAirport + "&prettyPrint=false&infantSeatingInLap=false&lccAndMerchantFareCheckoutAllowed=false&apikey=Sp40QZHEdigBSkXQjW5lKayhVUjhGirU";
   
	$.get(url,function(res) {
		var fares = [];
		var flight = [];
		var airCode = [];
		var airLocation = [];
		var depTime = [];
		var distance = [];
		var segments = [];
		var data1 = [];
		if (res.offers == undefined) {
				//console.log("null");
				counter++;
				console.log("n " + counter);
				return null;
		} else {
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

			document.getElementById("checking").style.visibility="visible";
			
			buildTable(data1);
			if (counter >= 500)
			document.getElementById("checking").style.visibility="hidden";


		}
	});


}

function buildTable(data) {
	// if (data.fares[i] < document.getElementById("g" + i).innerHTML) {

		for (var i = 1; i < 6; i++) {

			if (Math.abs(data.fares[i]) < document.getElementById("g" + i).innerHTML) {
				document.getElementById("a" + i).innerHTML = data.airCode[i];
				document.getElementById("b" + i).innerHTML = data.flight[i];
				document.getElementById("c" + i).innerHTML = data.airLocation[i];
				document.getElementById("d" + i).innerHTML = data.depTime[i];
				document.getElementById("e" + i).innerHTML = data.segments[i];
				document.getElementById("f" + i).innerHTML = data.distance[i];
				document.getElementById("g" + i).innerHTML = data.fares[i];
			
		 }
	}
}
