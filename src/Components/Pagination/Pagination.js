import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ countriesPerPage, totalCountries, nextPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalCountries / countriesPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pageContainer}>
      <ul className={styles.Unordered}>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => nextPage(number)}>
            <a href="!#"> {number} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
