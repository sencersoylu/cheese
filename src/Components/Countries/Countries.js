import React, { Component } from "react";
import Country from "../Countries/Country/Country";
import styles from "./Countries.module.css";
import Auxiliary from "../../hoc/Auxiliary";
import CountryDetails from "./CountryDetails/CountryDetails";

class Countries extends Component {
  state = {
    showCountryDetails: false,
    countrydetail: null
  };

  handleCountryDetails = (country) => {
    this.setState({
      showCountryDetails: true
    });
    this.setState({
      countrydetail: country
    });
  };

  render() {
    if (this.props.loading) {
      return <h1> Loading... </h1>;
    }

    if (this.state.showCountryDetails) {
      return (
        <CountryDetails
          nativename={this.state.countrydetail.nativeName}
          flag={this.state.countrydetail.flag}
          name={this.state.countrydetail.name}
          population={this.state.countrydetail.population}
          region={this.state.countrydetail.region}
          capital={this.state.countrydetail.capital}
          subregion={this.state.countrydetail.subregion}
          currency={this.state.countrydetail.currencies}
          language={this.state.countrydetail.languages}
          borders={this.state.countrydetail.borders}
          toplvldomain={this.state.countrydetail.topLevelDomain}
        />
      );
    }
    return (
      <Auxiliary>
        <div className={styles.Countries}>
          {this.props.countries.map((country) => {
            return (
              <Country
                key={country.name}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                selectCountry={() => this.handleCountryDetails(country)}
                details={this.props.showDetails}
              />
            );
          })}
        </div>
      </Auxiliary>
    );
  }
}

export default Countries;
