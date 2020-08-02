import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Carousel from '../others/CarouselStep';

class Articles extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Row>
				<Col lg={3} id='redLeft' className='pr-0 pl-0'></Col>
				<Col lg={6}>
					<Carousel />
				</Col>
				<Col lg={3} className='pr-0 pl-0'>
					<div id='redRight' style={{width: '100%', height: '100%' }}>
						<div id='ketchup' style={{width: '100%', height: '100%'}}></div>
					</div>
				</Col>
			</Row>
		);
	}
}

export default Articles;

