import styles from "../styles/Search.module.css";
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
