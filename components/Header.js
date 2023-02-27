/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <Fragment>
      <header className={styles.header}>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={50}
          className={styles.logo}
        />
        <div></div>
        <div className={styles.login}>로그인/ 회원가입</div>
      </header>
    </Fragment>
  );
}
