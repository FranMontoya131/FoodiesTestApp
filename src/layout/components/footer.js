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
				<Row>
					<Col lg={6}>
						<img src="/img/foodies.svg" alt="foodies"/>
					</Col>
					<Col lg={3} style={{display:'flex', justifyContent: 'flex-end', paddingRight: 0, paddingBottom: 10}}>
						<img styled={{width: 184, height: 54}} src="/img/appStore.svg" alt="appstore"/>
					</Col>
					<Col lg={3} style={{paddingBottom: 10}}>
						<img styled={{width: 184, height: 54}} src="/img/playStore.svg" alt="playstore"/>
					</Col>
				</Row>
				<Row style={{ borderTop: 1, borderColor: '#FFC700', borderTopStyle: 'solid'}}>
					{	
						menuFooter.map((item) => (
							<Col key={item.key} lg={item.col} style={{display: 'flex', justifyContent: 'center', padding: 0}}>
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