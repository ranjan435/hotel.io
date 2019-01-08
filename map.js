function initMap() {
  //location of gajuri
  var gajuri={lat:27.804575, lng:84.878104};
  var map=new google.maps.Map(
    document.getElementById('map'),{zoom:4,center:gajuri});
  var marker = new google.maps.Marker({position:gajuri,map:map});

}
