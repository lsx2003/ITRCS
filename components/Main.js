/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Main() {
  return (
    <Fragment>
      <main className={styles.container}>
        <div className={styles.content}>
          키워드를 통해
          <br />
          언론기사와 판례를 검색하세요.
          <SearchBar></SearchBar>
        </div>
        <div>
          <Image
            className={styles.img}
            src="/main3.jpg"
            alt="main"
            width={500}
            height={500}
          />
          <Image
            className={styles.img}
            src="/main2.jpg"
            alt="main"
            width={500}
            height={500}
          ></Image>
          <Image
            className={styles.img}
            src="/main1.jpg"
            alt="main"
            width={500}
            height={500}
          />
        </div>
      </main>
    </Fragment>
  );
}
