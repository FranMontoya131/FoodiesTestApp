import React, { Component } from 'react';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import styled from 'styled-components';

class TabsComponent extends Component {

	constructor(props){
		super();
		this.state = {}
	}

	render() {
		return(
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
				<Tab eventKey="home" title="Home">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eum repellendus veritatis ex nostrum, cum alias nobis maxime, ducimus enim dolores nesciunt veniam dolorem odio quia facilis laboriosam! Ab, odit.</p>
				</Tab>
				<Tab eventKey="profile" title="Profile">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eum repellendus veritatis ex nostrum, cum alias nobis maxime, ducimus enim dolores nesciunt veniam dolorem odio quia facilis laboriosam! Ab, odit.</p>
				</Tab>
			</Tabs>
		);
	}
}

export default TabsComponent;