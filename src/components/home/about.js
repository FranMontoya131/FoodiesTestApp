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
			<Row className='align-items-center' style={{ width: '100%', margin: 0 }}>
				<Col lg={6} style={{paddingLeft: 0, height: 447}}>
					<img src="/img/people.svg" alt="people" style={{ width: 639.5, height: 447 }}/>
					<img src="/img/frase-comida.svg" alt="frase" style={{ width: 311, height: 100, position: 'relative', top: '-9em', left: '17em'}}/>
				</Col>
				<Col lg={6}>
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