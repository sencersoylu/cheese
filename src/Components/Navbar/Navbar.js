import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.Navbar}>
      <h1> Where in the world? </h1>
      <p>
        <i className="fas fa-moon"></i> <span>Dark Mode</span>
      </p>
    </div>
  );
};

export default Navbar;

//far for diff moon
