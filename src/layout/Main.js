import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import { menuHeader, menuFooter } from '../config/general';


class Main extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Container fluid="lg">
				<div>
					<Row className="mt-3">
						{
							menuHeader.map((item) => (
								<Col key={item.key} lg={2}>
									<Link to={item.path}>
										{
											(item.text === 'Foodies') ? 
												<Title>
													{item.text}
												</Title> : 
												<Items>
													{item.text}
												</Items>
										}
									</Link>
								</Col>	
							))
						}
					</Row>
				</div>
				<div>
					<Row>
						<Col lg={6}>
							<TitleF>Foodies</TitleF>
						</Col>
						<Col lg={3}>
							<img styled={{width: 184, height: 54}} src="/img/appStore.svg" alt="appstore"/>
						</Col>
						<Col lg={3}>
							<img styled={{width: 184, height: 54}} src="/img/playStore.svg" alt="playstore"/>
						</Col>
					</Row>
					<Row>
						{	
							menuFooter.map((item) => (
								<Col key={item.key} lg={2}>
									<ItemsF>{item.text}</ItemsF>
								</Col>
							))
						}
					</Row>
				</div>
			</Container>
		);
	}
}

export default Main;

const Title = styled.span`
	font-family: Druk Text Wide;
	font-style: normal;
	font-weight: bold;
	font-size: 27px;
	line-height: 27px;
	color: var(--secondary-color);
`;

const Items = styled.span`
	font-family: Syne;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	cursor: pointer;
`;

const TitleF = styled.span`
	color: #7B7B7B;
`;

const ItemsF = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 28px;
	color: rgba(0, 0, 0, 0.4);
	cursor: pointer;
`;