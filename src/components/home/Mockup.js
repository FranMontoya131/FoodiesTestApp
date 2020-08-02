import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import TargetStep from '../others/TargetStep';

import { benefitsApp } from '../../config/general';

class Mockup extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Wrapper>
				<Row>
					<Col sm={12} md={12} lg={5} id='phone' style={{ display: 'flex', justifyContent: 'center'}}>
						<img className='phone' src="/img/phone.svg" alt="phone" style={{width: 500, height: 500}}/>
					</Col>
					<Col sm={12} md={12} lg={7}>
						<Row style={{textAlign: 'center'}}>
							<Col lg={12}>
								<span className='applyFontBaseBold moreInfo'>Obten más beneficios</span>
							</Col>
							<Col lg={12} className='rotateDiv' >
								<span className='applyFontBaseBold downApp'>Descarga nuestra App</span>
							</Col>	
						</Row>
						<Row className='justify-content-center' lg={8}>
							{
								benefitsApp && benefitsApp.map((item) => (
									<Col md={item.colSize} lg={item.colSize} key={item.key}>
										<TargetStep values={item} />
									</Col>
								))
							}
						</Row>
					</Col>
				</Row>
			</Wrapper>
		);
	}
}

export default Mockup;

const Wrapper = styled.div`
	.moreInfo, .downApp {
		font-size: 35px;
	}

	.downApp {
		background-color: #FFD600;
		/* box-shadow: 0px 10px #FFD600; */
	}

	@media (max-width: 992px) {
		.phone {
			width: 500px !important;
    		height: 400px !important;
		}
		
	}

	@media (max-width: 576px) {
		.phone {
			width: 300px !important;
    		height: 300px !important;
		}
	}
`;