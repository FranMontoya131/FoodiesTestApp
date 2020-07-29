import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import { menuFooter } from '../../config/general';

class Footer extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<>
				<Row style={{background: 'gray'}}>
					<Col lg={6}>
						<span style={{ color: '#7B7B7B'}}>Foodies</span>
					</Col>
					<Col lg={3}>
						<img styled={{width: 184, height: 54}} src="/img/appStore.svg" alt="appstore"/>
					</Col>
					<Col lg={3}>
						<img styled={{width: 184, height: 54}} src="/img/playStore.svg" alt="playstore"/>
					</Col>
				</Row>
				<Row style={{background: 'gray'}}>
					{	
						menuFooter.map((item) => (
							<Col key={item.key} lg={2}>
								<span className='footer-items'>{item.text}</span>
							</Col>
						))
					}
				</Row>
			</>
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