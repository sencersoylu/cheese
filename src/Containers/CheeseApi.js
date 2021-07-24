import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";
import Countries from "../Components/Countries/Countries";
import Pagination from "../Components/Pagination/Pagination";
import axios from "axios";
import styles from "./CheeseApi.module.css";

class CheeseApi extends Component {
  state = {
    cheeses: [],
    currentCountries: 1,
    cheesePerPage: 50,
    loading: false,
    searchCheese: false,
    searchRegion: false,
    cheeseName: "",
    regionName: "",
    showCheeseDetails: true
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    var config = {
      method: "get",
      url: "https://od-do.agr.gc.ca/canadianCheeseDirectory.json",
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      loading: false
    });
  }

  handleCheeseName = (e) => {
    let value = e.target.value;
    this.setState({
      searchCheese: true
    });
    this.setState({
      [e.target.name]: value
    });
  };

  // Handling Region Name
  handleRegionName = (val) => {
    this.setState({
      regionName: val
    });
    this.setState({
      searchRegion: true
    });
  };

  handleShowCheeseDetails = () => {
    this.setState({
      showCheeseDetails: false
    });
  };

  componentDidUpdate = () => {
    if (this.state.searchRegion) {
      if (
        this.state.regionName ||
        (this.state.regionName &&
          this.state.regionName !== this.state.countries[0].region)
      ) {
        axios
          .get(
            `https://restcountries.eu/rest/v2/region/${this.state.regionName}`
          )
          .then((response) => {
            this.setState({
              countries: response.data
            });
          });
        this.setState({
          searchRegion: false
        });
      }
    }
  };

  fetchCheese = (e) => {
    e.preventDefault();
    if (this.state.searchCheese) {
      if (
        this.state.cheeseName ||
        (this.state.cheeseName &&
          this.state.cheeseName !== this.state.countries[0].name)
      ) {
        axios
          .get(`/name/${this.state.cheeseName}?fullText=true`)
          .then((response) => {
            this.setState({
              countries: response.data
            });
          });
      }
      this.setState({
        searchCheese: false
      });
    }
  };

  handleNextPage = (number) => {
    this.setState({
      currentCountries: number
    });
  };
  render() {
    // Get Current Countries
    const indexOfLastPage =
      this.state.currentCountries * this.state.countriesPerPage;
    const indexOfFirstPage = indexOfLastPage - this.state.countriesPerPage;
    const currentSetOfCountries = this.state.cheeses.slice(
      indexOfFirstPage,
      indexOfLastPage
    );

    return (
      <Auxiliary>
        {this.state.showCheeseDetails ? (
          <div className={styles.searchSection}>
            <form className={styles.Form} onSubmit={this.fetchCheese}>
              <div className={styles.inputDiv}>
                {/* <i className="fas fa-search"></i> */}
                <input
                  type="text"
                  placeholder="Search for a cheese..."
                  name="cheeseName"
                  value={this.state.cheeseName}
                  onChange={this.handleCheeseName}
                />
              </div>
            </form>
            <div className={styles.dropdown}>
              Filter by Region
              {/* <i className="fas fa-chevron-down"></i> */}
              <ul className={styles.dropdownContent}>
                <li onClick={() => this.handleRegionName("africa")}>Africa</li>
                <li onClick={() => this.handleRegionName("americas")}>
                  Americas
                </li>
                <li onClick={() => this.handleRegionName("asia")}> Asia </li>
                <li onClick={() => this.handleRegionName("europe")}>Europe</li>
                <li onClick={() => this.handleRegionName("oceania")}>
                  Oceania
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <Countries
          countries={currentSetOfCountries}
          loading={this.state.loading}
          showDetails={() => this.handleShowCheeseDetails()}
        />
        <Pagination
          countriesPerPage={this.state.countriesPerPage}
          totalCountries={this.state.cheeses.length}
          nextPage={this.handleNextPage}
        />
      </Auxiliary>
    );
  }
}

export default CheeseApi;
