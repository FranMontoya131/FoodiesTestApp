import React, { Component } from 'react';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

class Offices extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render() {
		return(
			<>
				<Row>
					<Col lg={6}>
						<span>Estamos para ti</span>
						{/* esto lo tengo que pasar a componente */}
						
					</Col>
					<Col lg={6}>
						<img src="/img/Rectangle.png" alt="rectangulo" style={{width: 824, height: 609}}/>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<p>Hola</p>
					</Col>
				</Row>
			</>
		);
	}
}