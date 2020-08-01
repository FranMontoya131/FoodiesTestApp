import React, { Component } from 'react';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

class About extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render() {
		return(
			<Row style={{margin: 0 }}>
				<Col md={12} lg={6} className='pl-0 pr-0'>
					<Wrapper>
						<img className='peopleImg' src="/img/people.svg" alt="people"/>
						<img className='fraseComida' src="/img/frase-comida.svg" alt="frase"/>
					</Wrapper>
				</Col>
				<Col md={12} lg={6} className='pt-3'>
					<Row>
						<Col lg={12} className='mb-5 applyFontBaseBold' style={{fontSize: 22}}>
							<span>¿Quién es Foodies?</span>
						</Col>
						<Col lg={10} className='text-basic'>
							<span>Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco</span>	
						</Col>
						<Col lg={12} className='mt-5 applyFontBaseBold' style={{fontSize: 22}}>
							<span>Contáctanos</span>
							<img style={{marginLeft:10}} src="/img/arrow-right.svg" alt="arroy-right"/>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default About;

const Wrapper = styled.div`
	position: relative;

	.peopleImg {
		width: 100% !important;
	}

	.fraseComida{
		width: 70%;
		position: absolute;
		right: 1.5em;
		bottom: 3em;
	}

	@media (max-width: 992px) { 
		.fraseComida {
			width: 50;
		}
	}
`;