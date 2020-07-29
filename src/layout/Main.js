import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import { menuHeader, menuFooter } from '../config/general';


class Main extends Component {

	constructor(props){
		super(props);
		this.state = { 

		}
	}

	componentDidMount(){
		console.log('this.props :>> ', this.props);
	}

	render(){
		const { children } = this.props;

		return(
			<>
				<Container>
					<Row className="mt-3">
						{
							menuHeader.map((item) => (
								<Col key={item.key} lg={(item.text === 'Menu') ? 1 : 2}>
									<Link to={item.path}>
										<span className={(item.text === 'Foodies')? 'title-one' : 'menu-items'}>{item.text}</span>
									</Link>
								</Col>	
							))
						}
					</Row>
				</Container>
				<Wrapper>
					{
						children
					}
				</Wrapper>
				<Container>
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
									<span className='footer-items'>{item.text}</span>
								</Col>
							))
						}
					</Row>
				</Container>
			</>
		);
	}
}

export default Main;

const TitleF = styled.span`
	color: #7B7B7B;
`;

const Wrapper = styled.div`
	display: flex;
	margin-top: 5em;
	margin

	@media (max-width: 992px) {
		/*cuando vaya cambiando el tamaño*/
		margin-top: 5em;
	}
	flex-direction: column;
`;