import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

class TargetStep extends Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const { key, imgSource, altImg, title, content} = this.props.values;

		return(
			<Wrapper>
				<img className='mb-2' src={imgSource} alt={altImg}/>
				<Row className='justify-content-center'>
					<Col lg={12} className='mb-2'>
						<span className='applyRobotoNormal' style={{fontSize: 18}}>{title}</span>
					</Col>
					<Col sm={12} md={(key == 3) ? 6 : 12} lg={(key == 3) ? 6 : 12}>
						<span className='applyRobotoNormal' style={{fontSize: 12}}>{content}</span>
					</Col>
				</Row>
			</Wrapper>
		);
	}
}

export default TargetStep;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.9em;
	text-align: center;
`;