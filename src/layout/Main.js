import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import Head from '../layout/components/header';
import Foot from '../layout/components/footer';

class Main extends Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const { children } = this.props;

		return(
			<>
				<header>
					<Head />
				</header>
				<Wrapper>
					{
						children
					}
				</Wrapper>
				<footer>
					<Foot />
				</footer>
			</>
		);
	}
}

export default Main;

const Wrapper = styled.div`
	display: flex;
	margin-top: 5em;

	@media (max-width: 992px) {
		/*cuando vaya cambiando el tamaño*/
		margin-top: 5em;
	}

	flex-direction: column;
`;