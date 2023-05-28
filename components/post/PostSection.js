import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import styles from '../../styles/Section.module.css';
import Post from './Post';

export default function PrecedentSection() {
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query.page]);

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.precedent}>
          <Post></Post>
        </div>
      </div>
    </Fragment>
  );
}
4;
