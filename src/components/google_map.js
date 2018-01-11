import React, { Component } from 'react';

class GoogleMap extends Component {

	componentDidMount() {
		// called automatically after the component rendered to the screen
		
		// create a new google map, 
		// take a HTML node (element) where we want to render it to 
		// and an optional object
		new google.maps.Map(this.refs.map, {
			zoom: 12, // zoom level
			center: { // where we want to center: this city
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		// refering to this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap;