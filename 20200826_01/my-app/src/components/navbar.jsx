import React, { useState } from "react";
import styles from "./navbar.module.css";

export default function navbar() {
  const [showPageList, setShowPageList] = useState(true);
  const pageListClassName = `${styles.pageList}${
    showPageList ? "" : styles.noshow
  }`;
  return (
    <nav>
      <div className={styles.navbar}>
        <div
          className={styles.changList}
          onClick={() => {
            setShowPageList((show) => !showPageList);
          }}
        ></div>
      </div>
      <div className={className()}>
        <button>Home</button>
        <button>List</button>
        <button>Calender</button>
      </div>
    </nav>
  );
}
