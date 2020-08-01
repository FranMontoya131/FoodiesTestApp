import React, { Component } from 'react';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

import TabOffices from '../others/Tabs';
import Map from '../others/Maps';

class Offices extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render() {
		return(
			<>
				<Row className='justify-content-center'>
					<Col md={12} lg={5} className='pr-0'>
						<Wrapper>
							<span className='applyFontBaseBold' style={{fontSize: 40}}>Estamos para ti</span>
						</Wrapper>
						<TabOffices />
					</Col>
					<Col md={12} lg={7} className='pl-0 pr-0'>
						<Map />
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