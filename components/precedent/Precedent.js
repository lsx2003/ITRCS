import styles from '../../styles/Precedent.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Precedent() {
  const state = useSelector((state) => {
    return state.apiData.precedent;
  });

  return (
    <>
      {!state.prec ? <div className={styles.notFound}>검색결과가 없습니다.</div> : null}
      {state.prec &&
        state.prec.map((prec) => {
          const link = 'https://www.law.go.kr' + prec['판례상세링크']['_text'];
          {
            return (
              <>
                <div key={prec['사건번호']['_text']} className={styles.precedentContainer}>
                  <div className={styles.summary}>
                    <div className={styles.court}>{prec['법원명']['_text']}</div>
                    <div className={styles.date}>{prec['선고일자']['_text']}</div>
                    <div className={styles.sentence}>{prec['선고']['_text']}</div>
                    <div className={styles.caseNumber}> {prec['사건번호']['_text']}</div>
                    <div className={styles.category}> {prec['판결유형']['_text']}</div>
                  </div>
                  <div className={styles.caseName}> {prec['사건명']['_cdata']}</div>
                  <Link href={link} target='_blank' className={styles.link}>
                    판례 링크
                  </Link>
                </div>
              </>
            );
          }
        })}
    </>
  );
}
