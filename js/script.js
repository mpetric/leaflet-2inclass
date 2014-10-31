var map = L.map('map').setView([40.71025, -74.00155], 12);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

//define parks icon from http://mapicons.nicolasmollet.com/
var parkIcon = L.icon({
    iconUrl: './img/parkicon.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    //shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

//create markers for parks

var centralParkMarker = L.marker([40.776101, -73.969660], {icon: parkIcon}).addTo(map);
//centralParkMarker.bindPopup("Central Park").openPopup();

var prospectParkMarker = L.marker([40.663692, -73.968115], {icon: parkIcon}).addTo(map);


var fortGreeneParkMarker = L.marker([40.690771, -73.975668], {icon: parkIcon}).addTo(map);



//listeners for sidebar mouseover effects

$('.park').on('mouseover',function(){
	$(this).css('background','#8ECEFA');
});


$('.park').on('mouseout',function(){
	$(this).css('background','#7FABC9');
});

//Central Park Click listeners
$('.centralPark').on('click',function(){
	map.panTo(new L.LatLng(40.776101, -73.969660), {animate: true, duration: 1.0});
});

//Prospect Park Click listeners
$('.prospectPark').on('click',function(){
	map.panTo(new L.LatLng(40.663692, -73.968115), {animate: true, duration: 1.0});
});

//Fort Greene Park Click listeners
$('.fortGreenePark').on('click',function(){
	map.panTo(new L.LatLng(40.690771, -73.975668), {animate: true, duration: 1.0});
});

//listerners for map hover

centralParkMarker.on('mouseover',function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.centralPark').toggleClass('hover');
	});

prospectParkMarker.on('mouseover',function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.prospectPark').toggleClass('hover');
	});

fortGreeneParkMarker.on('mouseover',function(){
	$('.fortGreenePark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.fortGreenePark').toggleClass('hover');
	});