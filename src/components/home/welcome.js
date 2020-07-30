import React, { Component } from 'react';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

class Welcome extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}
	
	render() {
		return(
			<Container>
				<Row className='mb-5 align-items-center'>
					<Col lg={5}>
						<Row>
							<Col lg={12}>
								<span className='title-big'>Un nuevo sabor esta en la ciudad</span>
							</Col>
							<Col className='mt-2' lg={12}>
								<span className='text-basic'>Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables</span>
							</Col>
							<Col className='mt-5' lg={12}>
								<span className='text-enlace'>Encuentranos</span>
								<img style={{marginLeft:10}} src="/img/arrow-right.svg" alt="arroy-right"/>
							</Col>
						</Row>
					</Col>
					<Col lg={{span: 4, offset: 2}}>
						<img src="/img/hero_hamburger.svg" alt="hamburgesa"/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Welcome;