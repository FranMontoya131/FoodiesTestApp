import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { Req } from '../../helpers/Requests';

class FormContact extends Component {

	constructor(){
		super();
		this.state = { 
			name: '',
			email: '',
			message: ''
		}
	}

	handlerSendMessage = async() => {
		const { name, email, message } = this.state;

		const body = [{
			name,
			email, 
			message
		}]
		
		const data = await Req('post', 'contact', '', '', body);
		console.log('data :>> ', data);
	}

	render(){
		return(
			<WrapperForm>
				<Row className='justify-content-center rowContain'>
					{/* <Form> */}
					<Col sm={10} md={10} lg={3} >
						<Form.Label className='text-basic'>Nombre y Apellido</Form.Label>
						<Form.Control placeholder="Jhon Doe" maxLength='191' onChange={(evt) => { this.setState({name: evt.target.value}) }} />
						<Form.Label className='text-basic mt-3'>Correo Electrónico</Form.Label>
						<Form.Control placeholder="j.doe@correo.com" type='email' onChange={(evt) => { this.setState({email: evt.target.value}) }}/>
					</Col>
					<Col sm={10} md={10} lg={4}>
						<Form.Label className='text-basic'>Mensaje</Form.Label>
						<Form.Control as="textarea" placeholder="El día de ahora mi experiencia fue..." maxLength='255' style={{height: 132}} onChange={(evt) => { this.setState({message: evt.target.value}) }}/>
					</Col>
					<Col sm={10} md={10} lg={7}></Col>
					<Col sm={12} md={12} lg={4} className='mt-3 buttonEnviar'>
						<Button className='btnSend' onClick={this.handlerSendMessage}>
							<span className='text-basic'>Enviar Comentarios</span>
						</Button>
					</Col>
					{/* </Form> */}
				</Row>
			</WrapperForm>
			
		);
	}
}

export default FormContact;

const WrapperForm = styled.div`
	/* position: relative; */
	/* width: 100%; */
	margin-top: 1em;
	margin-bottom: 5em;	

	.form-label{
		color: #ffffff !important;
		font-size: 12px !important;
	}

	.form-control {
		border: 1px solid #FFFFFF;
		box-sizing: border-box;
		border-radius: 4px !important;
		background: #000000 !important;
		color: #ffffff !important;
		/* width: 1500px; */
		/* height: 610px; */
	}

	.btnSend {
		background: #FFD600;
	}

	.btnSend > span {
		font-size: 16px; 
		font-weight: bold;
		color: #000000;
	}

	@media (max-width: 992px) {
		.rowContain {
			padding-bottom: 10em;
		}

		.buttonEnviar {
			display: flex;
			justify-content: center;
		} 
	}
`;