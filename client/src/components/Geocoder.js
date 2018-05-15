import React, { Component } from 'react';
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import Geocoder from '@mapbox/react-geocoder';

mapboxgl.accessToken = "pk.eyJ1IjoiaGFja3VwIiwiYSI6ImNqaDI3cGtwdTBiemIyd2xpODE5NTB0YWQifQ.9Z2ES7XsDMO-_5GwV43qgw";

class Geocoder extends Component {

	constructor(props) {
	    super(props);

	  }

	  componentDidMount() {
			var map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v9',
     center: [-79.4512, 43.6568],
     zoom: 13
 });

 map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

	  }

	  render() {
	    const { lng, lat, zoom } = this.state;
	    return (
	      <div>

	      </div>
	    );
	  }
	}
	// the code above was taken from the following repository https://github.com/mapbox/mapbox-react-examples

export default Geocoder;
