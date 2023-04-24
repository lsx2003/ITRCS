import { setPress } from '@/slices/api/apiSlice';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Section.module.css';
import Article from './Article';

export default function PressSection({ currentPage, items }) {
  const [path, setPath] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  dispatch(setPress(items));

  const getPreData = () => {
    router.push(path + '?page=' + String(currentPage - 1));
  };

  const getMoreData = () => {
    router.push(path + '?page=' + String(currentPage + 1));
  };

  useEffect(() => {
    setPath(router.asPath.slice(0, -7));
  }, []);

  useEffect(() => {
    if (currentPage !== 1 && items?.length === 0) {
      router.push('/press?page=1');
    }
  }, [currentPage]);

  useEffect(() => {
    const cancelUpload = (e) => {
      e.returnValue = '';
    };
    (() => {
      window.addEventListener('beforeunload', cancelUpload);
    })();

    return () => {
      window.removeEventListener('beforeunload', cancelUpload);
    };
  }, []);

  return (
    <Fragment>
      <div className={styles.container}>
        <article className={styles.article}>
          <Article></Article>
        </article>
      </div>
      <div className={styles.btnWrapper}>
        {currentPage !== 1 && items?.length !== 0 ? (
          <div className={styles.prevData} onClick={getPreData}>
            이전
          </div>
        ) : null}
        {items?.length === 10 ? (
          <div className={styles.nextData} onClick={getMoreData}>
            다음
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}
4;
