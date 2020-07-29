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
				<Col lg={6} >
					<img src="/img/people.svg" alt="people" style={{ width: 500, height: 347 }}/>
					<img src="/img/frase-comida.svg" alt="frase" style={{ width: 311, height: 100, position: 'relative', top: '-14em', left: '9em'}}/>
				</Col>
				<Col lg={6}>
					<Row>
						<Col lg={12}>
							<span>¿Quién es Foodies?</span>
						</Col>
						<Col lg={12}>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, eligendi? Harum soluta quisquam illum vitae magni in eveniet at minus nesciunt quae similique ab reiciendis dolor repellat, omnis mollitia tenetur?</p>	
						</Col>
						<Col lg={12}>
							<p>Contáctanos</p>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default About;