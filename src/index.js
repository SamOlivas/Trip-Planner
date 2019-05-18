console.log('Hello from JavaScript');

import mapboxgl from 'mapbox-gl'
import buildMarker from "./marker"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Ftb2xpdmFzIiwiYSI6ImNqdnRzZzNwZjB1N3g0OWw5YWl6NGFwMXAifQ.JLMqCW3et1JiU9ilepEGZA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

// new mapboxgl.Marker(YOUR_DOM_ELEMENT).setLngLat(YOUR_COORDS_ARRAY).addTo(AN_EXISTING_MAP);

const marker = document.createElement('div')
marker.style.width = '32px';
marker.style.height = '39px';
marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map)

const getLoc = async function() {
  const getHotels =  fetch(`https://trip-planner-fsa.herokuapp.com/api/hotels/5`)
  const getRests =  fetch(` https://trip-planner-fsa.herokuapp.com/api/restaurants/5`)
  const getActiv = fetch(` https://trip-planner-fsa.herokuapp.com/api/activities/5`)

  const allLoc = [getHotelsJson, getRestsJson, getActivJson]
  const actualLoc = await Promise.all(allLoc)


  console.log(actualLoc[0], actualLoc[1], actualLoc[2])
}
getLoc()
