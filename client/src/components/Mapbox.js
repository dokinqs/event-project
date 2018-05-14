import React, { Component } from 'react';
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";

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
	      zoom
	    });

	    map.on('move', () => {
	      const { lng, lat } = map.getCenter();

	      this.setState({
	        lng: lng.toFixed(4),
	        lat: lat.toFixed(4),
	        zoom: map.getZoom().toFixed(2)
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
