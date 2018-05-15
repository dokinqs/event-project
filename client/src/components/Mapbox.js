import React, { Component } from 'react';
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = "pk.eyJ1IjoiaGFja3VwIiwiYSI6ImNqaDI3cGtwdTBiemIyd2xpODE5NTB0YWQifQ.9Z2ES7XsDMO-_5GwV43qgw";

class Mapbox extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      lng: -73.85,
	      lat: 40.75,
	      zoom: 11
	    };
	  }

	  componentDidMount() {
	    const { lng, lat, zoom } = this.state;

	    const map = new mapboxgl.Map({
	      container: this.mapContainer,
	      style: 'mapbox://styles/mapbox/streets-v9',  ///here is where you plug the url that you optain from the website
	      center: [lng, lat],
	      zoom: 10
	    });

			const geocoder = new MapboxGeocoder({
				accessToken: mapboxgl.accessToken
			});

			map.addControl(geocoder);

			map.on('load', function() {
				map.addSource('single-point', {
					"type": "geojson",
					"data": {
						"type": "FeatureCollection",
						"feature": []
					}
				});
				map.addLayer({
					"id": "point",
					"source": "single-point",
					"type": "circle",
					"paint": {
						"circle-radius": 10,
						"circle-color": "#007cbf"
					}
				});
				geocoder.on('result', function(ev) {
					map.getSource('single-point').setData(ev.result.geometry);
				});
			});
		}

	  render() {
	    const { lng, lat, zoom } = this.state;
	    return (
	      <div>
	        <div>
	          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
	        </div>
	        <div ref={el => this.mapContainer = el} className="map"></div>

	      </div>
	    );
	  }
	}
	// the code above was taken from the following repository https://github.com/mapbox/mapbox-react-examples

export default Mapbox;

// https://api.mapbox.com/geocoding/v5/mapbox.places/-73.9896352%2C40.7397171.json?access_token=pk.eyJ1IjoiaGFja3VwIiwiYSI6ImNqaDI3cGtwdTBiemIyd2xpODE5NTB0YWQifQ.9Z2ES7XsDMO-_5GwV43qgw
