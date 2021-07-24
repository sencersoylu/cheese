import React from "react";
import styles from "./CountryDetails.module.css";

const CountryDetails = ({
  nativename,
  flag,
  name,
  population,
  region,
  capital,
  subregion,
  currency,
  language,
  borders,
  toplvldomain
}) => {
  let lLength = language.length;
  let cLength = currency.length;
  return (
    <div className={styles.CountryDetails} key={name}>
      <div>
        <img className={styles.flag} src={flag} alt={name} />
      </div>
      <div className={styles.insideDetails}>
        <div>
          <h2> {name} </h2>
        </div>
        <div className={styles.details}>
          <div>
            <h3> Native Name : {nativename} </h3>
            <h3> Population : {population} </h3>
            <h3> Region : {region} </h3>
            <h3> Sub Region : {subregion} </h3>
            <h3> Capital : {capital} </h3>
          </div>
          <div>
            <h3> Top Level Domain : {toplvldomain} </h3>
            <h3>
              Currencies :
              {currency.map((c, i) => {
                console.log(i, lLength - 1);
                return i === lLength - 1 ? (
                  <span key={c.code}>{c.name},</span>
                ) : (
                  <span key={c.code}>{c.name}.</span>
                );
              })}
            </h3>
            <h3>
              Language :
              {language.map((l, i) =>
                i === cLength - 1 ? (
                  <span key={l.nativeName}> {l.name},</span>
                ) : (
                  <span key={l.nativeName}> {l.name}.</span>
                )
              )}
            </h3>
          </div>
        </div>
        <h3>
          Border Countries :
          {borders.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default CountryDetails;
