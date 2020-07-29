import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import { menuHeader } from '../../config/general';

class Header extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Container>
				<Row className="mt-5">
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
		);
	}
}

export default Header;

const Title = styled.span`
	font-family: Druk Text Wide;
	font-style: normal;
	font-weight: bold;
	font-size: 27px;
	line-height: 27px;
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