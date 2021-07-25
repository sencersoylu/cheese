import React, { Component } from 'react';
import Cheese from './Cheese/Cheese';
import styles from './Cheeses.module.css';
import Auxiliary from '../../hoc/Auxiliary';

class Cheeses extends Component {
	render() {
		if (this.props.loading) {
			return <h1> Loading... </h1>;
		}

		return (
			<Auxiliary>
				<div className={styles.Cheeses}>
					{this.props.cheeses.map((cheese) => {
						return <Cheese data={cheese} />;
					})}
				</div>
			</Auxiliary>
		);
	}
}

export default Cheeses;
