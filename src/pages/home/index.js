import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

class Home extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<>
				<Imagen>
					<img style={{ width: 550, height: 800}} src="/img/logoYellow.svg" alt="logo"/>
				</Imagen>
				<Container>
					<Row style={{ justifyContent: 'space-between'}}>
						<Col lg={4}>
							<Row>
								<Col lg={12}>
									<p className='title-big'>Un nuevo sabor esta en la ciudad</p>
								</Col>
								<Col lg={12}>
									<p className='text-basic'>Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables</p>
								</Col>
								<Col lg={12}>
									<p className='text-enlace'>Encuentranos</p>
								</Col>
							</Row>
						</Col>
						<Col lg={8}>
							<img style={{ width: 567, height: 300 }} src="/img/hero_hamburger.svg" alt="hamburgesa"/>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Home;

const Imagen = styled.div`
	position: absolute;
	top: -5em;
	right: 0;
	z-index: -10;

	@media (max-width: 715px) {
		/*cuando vaya cambiando el tamaño*/
	}
`;