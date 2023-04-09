import { Fragment } from 'react';
import styles from '../../styles/Section.module.css';
import Precedent from './Precedent';

export default function PrecedentSection() {
  return (
    <Fragment>
      <div className={styles.container}>
        <di className={styles.precedent}>
          <Precedent></Precedent>
        </di>
      </div>
    </Fragment>
  );
}
4;
