import { Fragment } from 'react';
import styles from '../../styles/Section.module.css';
import Article from './Article';

export default function PressSection() {
  return (
    <Fragment>
      <div className={styles.container}>
        <article className={styles.article}>
          <Article></Article>
        </article>
      </div>
    </Fragment>
  );
}
4;
