import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';
class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = { language: 'English' };
	}

	changeLang = () => {
		if (this.state.language == 'English') this.setState({ language: 'French' });
		else this.setState({ language: 'English' });
	};

	render() {
		console.log(this.props.children);
		return (
			<Auxiliary>
				<Navbar language={this.state.language} changeLang={this.changeLang} />
				<main>{this.props.children}</main>
			</Auxiliary>
		);
	}
}
export default Layout;
