import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBarPrimary extends Component {

	constructor(props){
		super(props);
		this.state = { 

		}
	}

	render() {
		const { optionsNavbar } = this.props;
		
		return(
			<Navbar collapseOnSelect expand="lg">
				<Navbar.Brand>
					<Link to='/home' className='mr-4'>
						<span className='title-one'>Foodies</span>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						{
							optionsNavbar.map((item) => (
								<Link to={item.path} key={item.key}>
									<Nav.Link>
										<span className='menu-items'>{item.text}</span>
									</Nav.Link>
								</Link>
							))
						}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBarPrimary;