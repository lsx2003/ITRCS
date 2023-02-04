import { Fragment } from "react";
import styles from "../styles/Header.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className={styles.SearchContainer}>
      <input className={styles.SearchBar} placeholder=""></input>
      <button className={styles.SearchBtn}>
        <BsSearch className={styles.SearchIcom}></BsSearch>
      </button>
    </div>
  );
}
