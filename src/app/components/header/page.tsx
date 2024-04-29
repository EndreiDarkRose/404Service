import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <p>
        Максим <span>+7 914-364-04-04</span>
      </p>
      <h1>404 Service</h1>
    </header>
  );
};

export default Header;
