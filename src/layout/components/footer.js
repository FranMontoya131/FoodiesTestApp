import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
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
					<Col sm={12} md={4} lg={6} className='titleFooter'>
						<WrapperFoot>
							<img src="/img/foodies.svg" alt="foodies"/>
						</WrapperFoot>
					</Col>
					<Col sm={12} md={8} lg={6}>
						<WrapperStore>
							<img styled={{width: 184, height: 54}} src="/img/appStore.svg" alt="appstore"/>
							<img styled={{width: 184, height: 54}} src="/img/playStore.svg" alt="playstore"/>
						</WrapperStore>
					</Col>
					{/* <Col sm={2} md={4} lg={3} style={{paddingBottom: 10}}>
					</Col> */}
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

const WrapperFoot = styled.div`
	
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1em;
	}
`;

const WrapperStore = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-bottom: 1em;

	@media (max-width: 992px) { 
		justify-content: flex-end;
		padding-bottom: 10px
	}

	@media (max-width: 768px) {
		justify-content: center;
	}

	@media (max-width: 576px) {
		img {
			width: 30% !important;
			height: 30% !important;
		}
	}
`;