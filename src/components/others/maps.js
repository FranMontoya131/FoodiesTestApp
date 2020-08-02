import React, { Component } from 'react'
import styled from 'styled-components'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// import Detalle from './Detail'

export class MapContainer extends Component {
	constructor(){
		super();
		this.state = {
			showingInfoWindow: true,
        	activeMarker: {},
        	selectedPlace: {},
		}
		console.log('process.env.REACT_APP_GOOGLE_MAP_API_KEY :>> ', process.env.REACT_APP_API_KEY);
	}

    componentWillReceiveProps(prevProps) {
        const { listFiltered } = this.props
        if (prevProps.listFiltered.length !== listFiltered.length ) {
            this.onCloseInfoWindows()
        }
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onCloseInfoWindows = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    markers = (e) => {
        let position;
        if (e) {
            position = {
                lat: e._latitude,
                lng: e._longitude
            }
        }
        return position
    }

    render() {
        const { listFiltered } = this.props


        return (
            <Wrapper>
                {
                    
                    <Map
                        google={this.props.google} zoom={9.2}
                        initialCenter={{
                            lat: 13.695,
                            lng: -88.950
                        }}
                        onClick={() => this.onCloseInfoWindows()}
                    >

                        {/* {listFiltered.map(e =>
                            <Marker onClick={this.onMarkerClick}
                                name={
                                    <Detalle lugar={e} mapa={true} />
                                }
                        position={this.markers(e.ubicacion)} />
                		)} */}
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                }
            </Wrapper>

        );
    }
}

const Wrapper = styled.div`
`

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
// key: 'AIzaSyByGZOo09v4DtgdVsEwudHzF_O_6QtC4LY'