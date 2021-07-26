import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Cheeses from '../Components/Cheeses/Cheeses';
import Pagination from '../Components/Pagination/Pagination';
import axios from 'axios';
import styles from './CheeseApi.module.css';
import cheeseData from './Cheese.json';
import InfiniteScroll from 'react-infinite-scroll-component';
class CheeseApi extends Component {
	state = {
		cheeses: [],
		currentCheeses: 1,
		cheesePerPage: 30,
		loading: false,
		searchCheese: false,
		searchRegion: false,
		cheeseName: '',
		regionName: '',
		hasMore: true,
		regions: {
			AB: 'Alberta',
			BC: 'British Columbia',
			MB: 'Manitoba',
			NB: 'New Brunswick',
			NL: 'Newfoundland and Labrador',
			NS: 'Nova Scotia',
			NT: 'Northwest Territories',
			NU: 'Nunavut',
			ON: 'Ontario',
			PE: 'Prince Edward Island',
			QC: 'Québec',
			SK: 'Saskatchewan',
			YT: 'Yukon',
		},
		cheesesList: [],
	};

	componentDidMount() {
		fetch('https://od-do.agr.gc.ca/canadianCheeseDirectory.json')
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					items: result.items,
				});
			});

		this.setState({
			loading: true,
			cheeses: cheeseData.CheeseDirectory,
			cheesesList: cheeseData.CheeseDirectory.slice(0, 30),
		});

		this.setState({
			loading: false,
		});
	}

	handleCheeseName = (e) => {
		let value = e.target.value;
		this.setState({
			searchCheese: true,
		});
		this.setState({
			[e.target.name]: value,
		});
	};

	// Handling Region Name
	handleRegionName = (val) => {
		console.log(val);
		this.setState({
			regionName: val,
		});
		this.setState({
			searchRegion: true,
		});
	};

	componentDidUpdate = () => {
		if (this.state.searchRegion) {
			if (
				this.state.regionName[0] ||
				(this.state.regionName[0] &&
					this.state.regionName[0] !== this.state.cheeses[0].region)
			) {
				console.log(
					cheeseData.CheeseDirectory.filter(
						(x) => x.ManufacturerProvCode == this.state.regionName[0]
					)
				);
				this.setState({
					searchRegion: false,
					cheeses: cheeseData.CheeseDirectory.filter(
						(x) => x.ManufacturerProvCode == this.state.regionName[0]
					),
					cheesesList: cheeseData.CheeseDirectory.filter(
						(x) => x.ManufacturerProvCode == this.state.regionName[0]
					).slice(0, 30),
				});
			}
		}
	};

	changeLang(lang) {
		console.log(lang);
	}

	fetchMoreData = () => {
		console.log("I'm fired");
		if (this.state.cheesesList.length >= this.state.cheeses.length) {
			this.setState({ hasMore: false });
			return;
		}
		// a fake async api call like which sends
		// 20 more records in .5 secs,

		setTimeout(() => {
			this.setState({
				cheesesList: this.state.cheesesList.concat(
					this.state.cheeses.slice(
						this.state.cheesesList.length,
						this.state.cheesesList.length + 30
					)
				),
			});
		}, 500);
	};

	render() {
		// Get Current Countries
		const cheeses = this.state.cheesesList;
		//console.log(cheeses);

		return (
			<Auxiliary>
				<div className={styles.searchSection}>
					<div className={styles.inputDiv}>
						{/* <i className="fas fa-search"></i> */}
					</div>
					<div className={styles.dropdown}>
						{this.state.regionName == ''
							? 'Filter by Region'
							: this.state.regionName[1]}
						<i className="fas fa-chevron-down "></i>
						<ul className={styles.dropdownContent}>
							{Object.entries(this.state.regions).map((x, i) => (
								<li onClick={() => this.handleRegionName(x)}>{x[1]}</li>
							))}
						</ul>
					</div>
				</div>

				<InfiniteScroll
					dataLength={cheeses.length}
					next={this.fetchMoreData}
					hasMore={this.state.hasMore}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}>
					<Cheeses cheeses={cheeses} loading={this.state.loading} />
				</InfiniteScroll>
			</Auxiliary>
		);
	}
}

export default CheeseApi;
