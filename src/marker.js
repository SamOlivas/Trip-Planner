import mapboxgl from 'mapbox-gl'

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(category, coordinates) {
  const newMarkerDiv = document.createElement('div')
  newMarkerDiv.style.backgroundSize = 'contain';
  newMarkerDiv.style.width = '32px';
  newMarkerDiv.style.height = '37px';
  newMarkerDiv.style.backgroundImage = `url(${iconURLs[category]})`;
  return new mapboxgl.Marker(newMarkerDiv).setLngLat(coordinates);
};


export default buildMarker

