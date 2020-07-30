import React, { Component } from 'react';
import {Container, Row, Col, Tabs, Tab, Card, Form} from 'react-bootstrap';
import styled from 'styled-components';

class TabsComponent extends Component {

	constructor(props){
		super();
		this.state = {}
	}

	hola = (e) => {
		console.log('e :>> ', e);
	}

	render() {
		return(
			<WrapperTab>
				<Tabs defaultActiveKey="toGo" id="uncontrolled-tab-example" onSelect={(e) => this.hola(e)}>
					<Tab eventKey="toGo" title="Para Llevar">
						<SearchContainer>
							<Form>
								<Row className='justify-content-center'>
									<Col lg={1} className='pr-0'>
										<img src="/img/search.svg" alt="search" style={{width: 24, height:24}}/>
									</Col>
									<Col lg={7}>
										<Form.Control className='searchInput' size="sm" type="text" placeholder="Buscar nombre o dirección" />
									</Col>
								</Row>
							</Form>
						</SearchContainer>
						<WrapperCards>
							<Card>
								<Card.Body>
									<span className='applyFontBaseBold' style={{fontSize: 20}}>Sucursal San Benito</span>
									<span className='applyOpenSans' style={{fontSize: 16}}>Abierto de 12:00 am - 9:00 pm calle la reforma</span>
								</Card.Body>
							</Card>
							<Card>
								<Card.Body>
									<span  className='applyFontBaseBold' style={{fontSize: 20}}>Sucursal San Benito</span>
									<span className='applyOpenSans' style={{fontSize: 16}}>Abierto de 12:00 am - 9:00 pm calle la reforma</span>
								</Card.Body>
							</Card>
						</WrapperCards>
					</Tab>
					<Tab eventKey="delivery" title="Domicilio">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eum repellendus veritatis ex nostrum, cum alias nobis maxime, ducimus enim dolores nesciunt veniam dolorem odio quia facilis laboriosam! Ab, odit.</p>
					</Tab>
				</Tabs>
			</WrapperTab>
		);
	}
}

export default TabsComponent;

const WrapperTab = styled.div`
	.nav-tabs {
		/* display: flex; */
		text-align: center;
	}

	.nav-tabs > a {
		width: 50%;
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		color: #000000;
		border: 1px solid #C4C4C4;
		border-radius: 0;
	}

	.nav-item.active {
		background: #000000;
		color: #ffffff;
		border: none;
	}
`;

const WrapperCards = styled.div`
	width: 100%;
    display: flex !important;
	justify-content: center !important;
	padding-top: 0.5em;
	flex-wrap: wrap;

	.card {
		width: 452px;
		height: 102px;
		margin-bottom: 0.5em;
	}

	.card-body {
		display: flex;
		justify-content: start;
		flex-direction: column;
	}
`;

const SearchContainer = styled.div`
	width: 100%;
	border: 1px solid #C4C4C4;
	padding: 0.5em;

	.searchInput {
		border: none !important;
	}
`;