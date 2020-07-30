import React, { Component } from 'react';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

//components
import Welcome from '../../components/home/welcome';
import About from '../../components/home/about';
import Offices from '../../components/home/offices';
import Articless from '../../components/home/articles';

class Home extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render(){
		return(
			<>
				<section style={{marginTop: '0.5em'}}>
					<Welcome />
				</section>
				
				<section>
					<About />
				</section>

				<section style={{marginTop: '2em'}}>
					<Offices />
				</section>
				
				<section style={{marginTop: '2em'}}>
					<Articless />
				</section>
			</>
		);
	}
}

export default Home;
