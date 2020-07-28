import React, { Component } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

class Footer extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Container >
				<Row>
					<Col>
						<Title>Foodies</Title>
					</Col>
					<Col>
						<img src="/img/appStore.svg" alt="appstore"/>
					</Col>
					<Col>
						<img src="/img/playStore.svg" alt="playstore"/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Items>Conoce nuestras sucursales</Items>
					</Col>
					<Col>
						<Items>Acerca de</Items>
					</Col>
					<Col>
						<Items>¿Qué hablan de nosotros?</Items>
					</Col>
					<Col>
						<Items>Contáctanos</Items>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Footer;

const Title = styled.span`
	color: #7B7B7B;
`;

const Items = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 28px;
	color: rgba(0, 0, 0, 0.4);
	cursor: pointer;
`;