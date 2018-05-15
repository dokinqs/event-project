import React, { Component } from 'react';
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import Geocoder from '@mapbox/react-geocoder';

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

			// testing to see if a marker will appear
			// const marker = new mapboxgl.Marker()
			// .setLngLat([-21.9270884, 64.1436456])
			// .addTo(map);

			// map.addControl(geocoder);

			// testing to see if setting a point after geocoder result
			// const geocoder = new MapboxGeocoder({
			// 	accessToken: mapboxgl.accessToken
			// });

			// After the map style has loaded on the page, add
			// a source layer and default style for a single point
			// map.on('load', function() {
			// 	map.addSource('single-point', {
			// 		"type": "geojson",
			// 		"data": {
			// 			"type": "FeatureCollection",
			// 			"feature": []
			// 		}
			// 	});
			//
			// map.addLayer({
			// 	"id": "point",
			// 	"source": "singple-parent",
			// 	"type": "circle",
			// 	"paint": {
			// 		"circle-radius": 10,
			// 		"circle-color": "#007cbf"
			// 	}
			// });

			// listens for the 'geocoder.input' event that is triggered
			// when a user makes a selection and ass a symbol that
			// matches the result.

			// geocoder.on('result', function(ev) {
			// 	map.getSource('single-point').setData(ev.result.geometry);
			// });
	// });

	    // map.on('move', () => {
	    //   const { lng, lat } = map.getCenter();
			//
	    //   this.setState({
	    //     lng: lng.toFixed(4),
	    //     lat: lat.toFixed(4),
	    //     zoom: map.getZoom().toFixed(2)
	    //   });
	    // });


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
