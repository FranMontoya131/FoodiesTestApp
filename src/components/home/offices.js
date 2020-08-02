import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import TabOffices from '../others/Tabs';
import Map from '../others/Maps';

import { Req } from '../../helpers/Requests';

class Offices extends Component {

	constructor(){
		super();
		this.state = {
			officesTakeAway: [],
			officesDelivery: [],
			searchValue: '',
			type: ''
		}
	}

	componentDidMount () {
		this.handlerOfficesTakeaway();
		this.handleOfficesDelivery();
	}

	componentDidUpdate () {
		this.handleSearchPlaces();
	}

	handlerOfficesTakeaway = async() => {
		const data = await Req('get', 'locations', 'type', 'takeaway');

		if(data)
			this.setState({officesTakeAway:data.data});
	}

	handleOfficesDelivery = async() => {
		const data = await Req('get', 'locations', 'type', 'delivery');
		console.log('data :>> ', data);
		if(data)
			this.setState({officesDelivery:data.data});
	}

	handleSearchPlaces = async() => {
		const { searchValue, type } = this.state;
		
		if(searchValue && type) {
			// const data = await Req('get', 'locations', ['type', 'query'], [type, searchValue]);
			if(type == 'takeaway'){
				const { officesTakeAway } = this.state;
				if(officesTakeAway && Array.isArray(officesTakeAway.data)){
					console.log('searchValue :>> ', officesTakeAway.data);

					const data = officesTakeAway.data.find(el => el.name == searchValue);
					console.log('data :>> ', data);
				}

			}else if(type == 'delivery'){

			}
			
		}

	}

	render() {
		const { officesTakeAway, officesDelivery } = this.state;

		return(
			<>
				<Row className='justify-content-center'>
					<Col md={12} lg={5} className='dpResponsive'>
						<Wrapper>
							<span className='applyFontBaseBold' style={{fontSize: 40}}>Estamos para ti</span>
						</Wrapper>
						<TabOffices takeAway={officesTakeAway} delivery={officesDelivery} searchValue={(e)=>{ this.setState({searchValue: e.value, type: e.type})}}/>
					</Col>
					<Col md={12} lg={7} className='pl-0 pr-0'>
						<Map listFiltered={officesTakeAway} />
					</Col>
				</Row>
			</>
		);
	}
}

export default Offices;

const Wrapper = styled.div`
	display: flex;
	justify-content: center; 
	width: 100%;
`;