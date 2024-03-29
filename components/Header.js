/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NextLink from 'next/link';
export default function Header() {
  const router = useRouter();
  const currentPath = router.asPath;

  if (currentPath.includes('account')) return null;
  return (
    <Fragment>
      <header className={styles.header}>
        <NextLink href='/' style={{textDecoration:"none"}}>
          <div className={styles.headerTitle}>
            Hansoom
            <Image src='icons/hansoom_icon.svg' width='27' height='20' alt='logo' />
          </div>
        </NextLink>
        <div></div>
        <div className={styles.menu}>
          <NextLink href='/press?page=1' style={{textDecoration:"none"}}>
            <div className={styles.menuItem} style={{ borderRight: 'solid', borderColor: 'white' }}>
              최신기사
            </div>
          </NextLink>
          <NextLink href='/precedent?page=1' style={{textDecoration:"none"}}>
            <div className={styles.menuItem} style={{ borderRight: 'solid', borderColor: 'white' }}>
              판례관련
            </div>
          </NextLink>
          <NextLink href='/post' style={{textDecoration:"none"}}>
            <div className={styles.menuItem} style={{ borderRight: 'solid', borderColor: 'white' }}>
              사연보기
            </div>
          </NextLink>
          <NextLink href='/account/login' style={{ marginRight: 0, textDecoration:"none" }}>
            <div className={styles.menuItem}>로그인</div>
          </NextLink>
        </div>
      </header>
    </Fragment>
  );
}
