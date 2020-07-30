import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { phrases } from "../../config/general";

import Carousel from '../../components/others/carousel';

class Articles extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Row>
				<Col lg={3} id='redLeft'></Col>
				<Col lg={6}>
					<Carousel />
				</Col>
				<Col lg={3} id='redRight'></Col>
			</Row>
		);
	}
}

export default Articles;