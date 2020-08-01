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

				<section>
					<Contact />
				</section>

				<section style={{marginTop: '1em'}}>
					<Mockup />
				</section>
			</>
		);
	}
}

export default Home;
