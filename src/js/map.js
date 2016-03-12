function initialize() {
	 var latlng = new google.maps.LatLng(59.936129, 30.320955);
	 var settings = {
	 zoom: 17,
	 center: latlng,
	 mapTypeControl: true,
	 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	 navigationControl: true,
	 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	 mapTypeId: google.maps.MapTypeId.ROADMAP
	 };
	var map = new google.maps.Map(document.querySelector(".map"), settings);

	// Marker
	var markerCircle = new google.maps.Circle({
      strokeColor: '#ffffff',
      strokeOpacity: 1,
      strokeWeight: 12,
      fillColor: '#d22856',
      fillOpacity: 1,
      map: map,
      center: {lat: 59.936129, lng: 30.320955},
      radius: 15
    });
};
initialize();