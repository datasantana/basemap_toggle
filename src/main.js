import './style.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const lightStyle = import.meta.env.VITE_MAPBOX_STANDARD_BASEMAP;
const darkStyle = import.meta.env.VITE_MAPBOX_SATELLITE_BASEMAP;

const map = new mapboxgl.Map({
  container: 'app',
  style: lightStyle,
  //center: [-74.5, 40], // Uncomment and change to your desired initial center
  //zoom: 9 // Uncomment and change to your desired initial zoom level
});

// Add navigation control (zoom in/out) to the top-right
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Add geolocate control to the top-right
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true,
  showUserHeading: true
}), 'top-right');

// Custom control for basemap toggle
class BasemapToggleControl {
  onAdd(map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this._container.style.backgroundColor = '#666';
    this._container.style.borderRadius = '4px';
    this._container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';

    const select = document.createElement('select');
    select.style.padding = '5px';
    select.style.border = 'none';
    select.style.background = 'transparent';
    select.style.fontSize = '14px';
    select.style.color = 'white';

    const lightOption = document.createElement('option');
    lightOption.value = lightStyle;
    lightOption.text = 'Light';
    lightOption.style.color = 'black'; // Ensure option text is visible
    select.appendChild(lightOption);

    const darkOption = document.createElement('option');
    darkOption.value = darkStyle;
    darkOption.text = 'Dark';
    darkOption.style.color = 'black'; // Ensure option text is visible
    select.appendChild(darkOption);

    select.addEventListener('change', (e) => {
      this._map.setStyle(e.target.value);
    });

    this._container.appendChild(select);
    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

// Add basemap toggle control to the top-left
map.addControl(new BasemapToggleControl(), 'top-left');
