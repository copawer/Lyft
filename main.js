var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}



function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'aqui es'
  });
}*/
var marca;
var coorde={};

 initMap =function(){
     navigator.geolocalizacion.getCurrenPosition(
         function(posicion){
             coorde ={
                 log:posicion.coorde.longuitud,
                 lat:posicion.coorde.latitud
             };
             setMapa(coorde);
         },function(Error){console.log(error);});
     
 }
 //country
 var country=[
 
 {
 "nombre": "Perú",
  "img":"flags-iso/flat/16/PE.png",
  "phone_code": 51},
 
 
     
     
     {
   "nombre": "Australia",
    "img": "flags-iso/flat/16/AU.png",
    "phone_code": 61
  },
  {
    "nombre": "Canadá",
    "img": "flags-iso/flat/16/CA.png",
    "phone_code": 1
  },
  {
    "nombre": "China",
    "img":"flags-iso/flat/16/CN.png" ,
    "phone_code": 86
  },
  {
    "nombre": "Francia",
    "img": "flags-iso/flat/16/FR.png",
    "phone_code": 33
  },
  {
    "nombre": "India",
    "img":"flags-iso/flat/16/IN.png" ,
    "phone_code": 91
  },
  {
    "nombre": "Japón",
    "img": "flags-iso/flat/16/JP.png",
    "phone_code": 81
  },
  {
    "nombre": "México",
    "img":"flags-iso/flat/16/MX.png" ,
    "phone_code": 52
  },
     {
    "nombre": "Puerto Rico",
    "img": "flags-iso/flat/16/PR.png",
    "phone_code": 1
  },
     {
    "nombre": "Reino Unido",
    "img": "flags-iso/flat/16/GB.png",
    "phone_code": 44
  },
     ]
 
