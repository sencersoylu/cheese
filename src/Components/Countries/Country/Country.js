import React from "react";
import styles from "./Country.module.css";

const Country = ({
  flag,
  name,
  population,
  region,
  capital,
  selectCountry,
  details
}) => {
  return (
    <div onClick={details}>
      <div className={styles.Country} onClick={selectCountry}>
        <div className={styles.innerDiv}>
          <h2> {name} </h2>
          <h3>
            Population: <span className={styles.stl}>{population}</span>
          </h3>
          <h3>
            Region: <span className={styles.stl}>{region}</span>
          </h3>
          <h3>
            Capital: <span className={styles.stl}>{capital}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Country;
