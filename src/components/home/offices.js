import React, { Component } from 'react';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

import TabOffices from '../others/Tabs';

class Offices extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render() {
		return(
			<>
				<Row className='justify-content-center'>
					<Col lg={6} md={12}>
						<Wrapper>
							<span className='applyFontBaseBold' style={{fontSize: 40}}>Estamos para ti</span>
						</Wrapper>
						<TabOffices />
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

export default Offices;

const Wrapper = styled.div`
	display: flex;
	justify-content: center; 
	width: 100%;
`;