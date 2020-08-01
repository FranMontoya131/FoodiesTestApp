import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

class Map extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render() {
		return(
			<Wrapper>
				<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyByGZOo09v4DtgdVsEwudHzF_O_6QtC4LY' }}
				defaultCenter={{lat: 13.707338, lng: -89.251410}}
				defaultZoom={11}>
				</GoogleMapReact>
			</Wrapper>
		);
	}
}

export default Map;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;