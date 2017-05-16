var map = L.map('map').setView([39.36, -104,45], 12);

L.tileLayer("http://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: 'Map data&copy; OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([36.36, -102,45]).addTo(map);

var coord = [[38.36, -106,45],
             [37.66, -105,55],
			 [38.86, -103,15],
			 [39.16, -104,85],
];
var marker_array = []; 
for(var i = 0; i < coord.length; i++){
	marker_array[i] = new L.marker(coord[i]).addTo(map);
}
marker_array[0].bindPopup('<p>Ciao io sono la nuvoletta popup</p>');

//var polyline = new L.polyline(coord, {color : 'red', weight : 8}).addTo(map);

var polygon = new L.polygon(coord, {color : 'red', weight : 4, fill : true}).addTo(map);

for(var i = 0; i < coord.length; i++){
	marker_array[i] = new L.circle(coord[i], 7000).addTo(map);
}