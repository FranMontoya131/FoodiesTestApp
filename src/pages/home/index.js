import React, { Component } from 'react';

//components
import Welcome from '../../components/home/Welcome';
import About from '../../components/home/About';
import Offices from '../../components/home/Offices';
import Articless from '../../components/home/Articles';
import Contact from '../../components/home/Contact';
import Mockup from '../../components/home/Mockup';

class Home extends Component {

	constructor(){
		super();
		this.state = {}
	}

	render(){
		return(
			<>
				<section style={{marginTop: '0.5em', width: '100%'}}>
					<Welcome />
				</section>
				
				<section style={{marginTop: '10em', width: '100%'}}>
					<About />
				</section>

				<section style={{marginTop: '2em', width: '100%'}}>
					<Offices />
				</section>
				
				<section style={{marginTop: '2em', width: '100%', padding: '1em'}}>
					<Articless />
				</section>

				<section style={{marginTop: 0, backgroundColor: '#000000', width: '100%'}}>
					<Contact />
				</section>

				<section style={{marginTop: '1em', width: '100%', padding: '1em'}}>
					<Mockup />
				</section>
			</>
		);
	}
}

export default Home;
