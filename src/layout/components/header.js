import React, { Component } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

class Header extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Container >
				<Row className="mt-3">
					<Col lg={3}><Title>Foodies</Title></Col>
					<Col lg={2}><Items>Acerca de</Items></Col>
					<Col lg={2}><Items>Restaurantes</Items></Col>
					<Col lg={2}><Items>Menú</Items></Col>
					<Col lg={2}><Items>Contáctanos</Items></Col>
				</Row>
			</Container>
		);
	}
}

export default Header;

const Title = styled.span`
	font-family: Druk Text Wide;
	font-style: normal;
	font-weight: bold;
	font-size: 27px;
	line-height: 27px;
`;

const Items = styled.span`
	font-family: Syne;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	cursor: pointer;
`;