/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';
import NextLink from 'next/link';
export default function Header() {
  const router = useRouter();
  const currentPath = router.asPath;

  if (currentPath.includes('account')) return null;
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
        <NextLink href="/account/login">
          <div className={styles.login}>로그인/ 회원가입</div>
        </NextLink>
      </header>
    </Fragment>
  );
}
