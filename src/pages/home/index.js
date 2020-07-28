import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

class Home extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Imagen>
				<img src="/img/logoYellow.svg" alt="logo"/>
			</Imagen>
		);
	}
}

export default Home;

const Imagen = styled.span`
	

	@media (max-width: 715px) {
		/*cuando vaya cambiando el tamaño*/
	}
`;