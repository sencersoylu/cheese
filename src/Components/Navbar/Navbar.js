import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<div className={styles.Navbar}>
			<h1> Canadian Cheeses </h1>
			<p onClick={props.changeLang}>
				<span>{props.language}</span>
			</p>
		</div>
	);
};

export default Navbar;

//far for diff moon
