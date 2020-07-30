import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render() {
		return(
			<>
				<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyByGZOo09v4DtgdVsEwudHzF_O_6QtC4LY' }}
				defaultCenter={{lat: 13.707338, lng: -89.251410}}
				defaultZoom={11}
				></GoogleMapReact>
			</>
		);
	}
}

export default Map;