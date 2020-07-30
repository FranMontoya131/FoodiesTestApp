import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import FormContact from '../others/Form';
class Contact extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<>
				<Row style={{backgroundColor: '#000000'}} className='justify-content-center'>
					<Col lg={12} style={{ marginTop: 55, textAlign: 'center'}}>
						<span style={{color: 'white', fontSize: 36, marginBottom: 15}} className='applyFontBaseBold'>Cuentanos tu experiencia</span>
					</Col>
					<Col lg={5} style={{ textAlign: 'center'}}>
						<span style={{color: 'white'}} className='text-basic'>Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</span>
					</Col>
				</Row>
				<Row style={{backgroundColor: '#000000'}} className='justify-content-center'>
					<FormContact />
				</Row>
			</>
		);
	}
}

export default Contact;