import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

class Carousels extends Component {

	constructor(props){
		super(props);
		this.state = { 
			
		}
	}

	render(){
		return(
			<Wrapper>
				<span className='applyFontBaseBold' style={{fontSize: 36, marginBottom: 10}}>"El mejor lugar para degustar en familia y amigos!"</span>
				<span className='text-basic'>Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera</span>
			</Wrapper>
		);
	}
}

export default Carousels;

const Wrapper = styled.div`

	width: 100%;
	height: 360px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;