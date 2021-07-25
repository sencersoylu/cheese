import React from 'react';
import Layout from '../src/Components/Layout/Layout';
import CheeseApi from '../src/Containers/CheeseApi';
import './styles.css';

export default function App() {
	let language = 'English';
	return (
		<div className="App">
			<Layout language={language}>
				<CheeseApi />
			</Layout>
		</div>
	);
}
