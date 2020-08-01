import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import { menuHeader } from '../../config/general';

import NavBarPrimary from '../../components/others/NavBarPrimary';

class Header extends Component {

	constructor(){
		super();
		this.state = { 

		}
	}

	render(){
		return(
			<Wrapper>
			<Container>
				{/* <Row className="mt-5 headerLg">
					{
						menuHeader.map((item) => (
							<Col key={item.key} lg={(item.text === 'Menu') ? 1 : 2}>
								<Link to={item.path}>
									<span className={(item.text === 'Foodies')? 'title-one' : 'menu-items'}>{item.text}</span>
								</Link>
							</Col>	
						))
					}
				</Row> */}
				<NavBarPrimary optionsNavbar={menuHeader} />
			</Container>
			</Wrapper>
		);
	}
}

export default Header;

const Wrapper = styled.div`

	@media (max-width: 992px) {
		.headerLg {
			display: none;
		}
	}
`;