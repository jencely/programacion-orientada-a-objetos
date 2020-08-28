var myMap = L.map('map').setView([-0.201479, -78.490301], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

L.marker([-0.225069,-78.5168959 ]).addTo(myMap)
    .bindPopup("Instuto yavirac")
    .openPopup()

L.marker([-0.2235145,-78.5113281]).addTo(myMap)
    .bindPopup("Yo")
    .openPopup()
L.marker([-0.2537563,-78.5330725]).addTo(myMap)
    .bindPopup("Steve")
    .openPopup()
L.marker([-0.355708, -78.528793]).addTo(myMap)
    .bindPopup("Jazmin")
    .openPopup()
L.marker([-0.0866811,-78.5073176]).addTo(myMap)
    .bindPopup("Bryan")
    .openPopup()
L.marker([-0.071850, -78.435068]).addTo(myMap)
    .bindPopup("Dalton")
    .openPopup()
L.marker([-0.290397, -78.552108]).addTo(myMap)
    .bindPopup("Kevin")
    .openPopup()
var Instituto_jenifer = [
    [-0.225069,-78.5168959],//intituto coordenadads
    [-0.2235145,-78.5113281]//coordenadas jenifer
];
var polyline = L.polyline(Instituto_jenifer, {color: 'black'}).addTo(map);
// zoom de la linea 
map.fitBounds(polyline.getBounds());


var Instituto_Steven=[
    [-0.225069,-78.5168959],//Instituto cordenadas
    [-0.2537563,-78.5330725]//coordenadas steven
];
 polyline = L.polyline(Instituto_Steven, {color: 'green'}).addTo(map);



var Instituto_andres=[
    [-0.225069,-78.5168959],//Instituto cordenadas
    [-0.0866811,-78.5073176]//coordenadas andres
];
 polyline = L.polyline(Instituto_andres, {color: 'purple'}).addTo(map);


var Instituto_jumbo=[
    [-0.225069,-78.5168959],//Instituto cordenadas
    [-0.071850, -78.435068]//coordenadas jumbo
];
 polyline = L.polyline(Instituto_jumbo, {color: 'yellow'}).addTo(map);


var Instituto_pastrana=[
    [-0.225069,-78.5168959],//Instituto cordenadas
    [-0.241768, -78.526977 ]//coordenadas pastrana
];
 polyline = L.polyline(Instituto_pastrana, {color: 'orange'}).addTo(map);



/*--------------------------------calculo de distancias --------------------------------------*/
var lat1 = -0.225069;
var lon1 = -78.5168959;
var lat2 = 0;
var lon2 =  0;
function Dist(lat1, lon1, lat2, lon2) {
     rad = function (x) {
         return x * Math.PI / 180;
     }
     var R = 6378.137;//Radio de la tierra en km
     var dLat = rad(lat2 - lat1);
     var dLong = rad(lon2 - lon1);
     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     var d = R * c;
     return d.toFixed(2);
}

var cantidad_distancias=[];
 var Distancia_pastrana = Dist(lat1, lon1, -0.241768, -78.526977);
cantidad_distancias.push(Distancia_pastrana);
console.log ("Pastrana se encuentra a =  " + Distancia_pastrana + " km del Intituto");


var distancia_jumbo=Dist(lat1, lon1, -0.071850, -78.435068);
cantidad_distancias.push(distancia_jumbo);
console.log("Jumbo se encuentra a =  " +distancia_jumbo+ " km del Intituto");


var distancia_jenifer=Dist(lat1, lon1, -0.2235145, -78.5113281);
cantidad_distancias.push(distancia_jenifer);
console.log("jenifer se encuentra a =  " +distancia_jenifer+ " km del Intituto");


 var distancia_Steven=Dist(lat1, lon1, -0.2537563, -78.5330725);
cantidad_distancias.push(distancia_Steven);
console.log("Steven se encuentra a =  " +distancia_Steven+ " km del Intituto");


var  distancia_andres=Dist(lat1, lon1, -0.0866811, -78.5073176);
cantidad_distancias.push(distancia_andres);
console.log("Steven se encuentra a =  " +distancia_andres+ " km del Intituto");

///--------distancia maxima recorrida .......

var distancia_maxima=Math.max.apply(null,cantidad_distancias);
console.log( "la distancia mas larga del instituto es = "+distancia_maxima +" km");
//--------------distancia minima -----------------
var distancia_maxima=Math.min.apply(null,cantidad_distancias);
console.log( "la distancia mas corta del instituto es = "+distancia_maxima +" km");
