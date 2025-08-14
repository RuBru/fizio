/*!***************************************************
 * Google Map
 *****************************************************/

window.marker = null;

async function initialize() {
  var map,
    mapId = document.getElementById("map");
  var latitude = mapId.getAttribute("data-latitude");
  var longitude = mapId.getAttribute("data-longitude");
  var mapMarker = mapId.getAttribute("data-marker");
  var mapMarkerName = mapId.getAttribute("data-marker-name");
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 65,
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: "50",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        {
          lightness: "30",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          lightness: "40",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          hue: "#ffff00",
        },
        {
          lightness: -25,
        },
        {
          saturation: -97,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          lightness: -25,
        },
        {
          saturation: -100,
        },
      ],
    },
  ];
  var mapOptions = {
    mapId: "eb63eff5efe597834faf2657",
    center: nottingham,
    backgroundColor: "#000",
    zoom: 16,
    panControl: !1,
    zoomControl: !0,
    mapTypeControl: !1,
    scaleControl: !1,
    streetViewControl: !1,
    overviewMapControl: !1,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
    },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  const pin = new PinElement({
    scale: 1.3,
  });
  marker = new AdvancedMarkerElement({
    position: nottingham,
    map: map,
    content: pin.element,
    title: mapMarkerName,
  });
}
var map = document.getElementById("map");
if (map != null) {
  google.maps.event.addDomListener(window, "load", initialize);
}
