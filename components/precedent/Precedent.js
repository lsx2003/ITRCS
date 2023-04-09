import styles from '../../styles/Precedent.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Precedent() {
  const state = useSelector((state) => {
    return state.apiData.precedent;
  });
  console.log('state', state);
  return (
    <>
      {state.prec.map((prec, idx) => {
        {
          return (
            <>
              <div key={prec['사건번호']['_text']} className={styles.precedentContaioner}>
                <div Name={styles.summary}>
                  <div className={styles.court}>{prec['법원명']['_text']}</div>
                  <div className={styles.case}>{prec['선고일자']['_text']}</div>
                  <div className={styles.case}>{prec['선고']['_text']}</div>
                  <div className={styles.caseNum}> {prec['판결유형']['_text']}</div>
                </div>

                <div className={styles.case}>{prec['사건명']['_cdata']}</div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

// 법원명
// :
// {_text: '대법원'}
// 법원종류코드
// :
// {}
// 사건명
// :
// {_cdata: '성폭력범죄의처벌등에관한특례법위반(촬영물등이용협박)·성폭력범죄의처벌등에관한특례법위반(카메라등이용촬영·반포등)·성폭력범죄의처벌등에관한특례법위반(촬영물등이용강요)·공갈미수'}
// 사건번호
// :
// {_text: '2022도10564'}
// 사건종류명
// :
// {_text: '형사'}
// 사건종류코드
// :
// {_text: '400102'}
// 선고
// :
// {_text: '선고'}
// 선고일자
// :
// {_text: '2022.12.15'}
// 판결유형
// :
// {_text: '판결'}
// 판례상세링크
// :
// {_text: '/DRF/lawService.do?OC=windxtoto123&target=prec&ID=232765&type=HTML&mobileYn='}
// 판례일련번호
// :
// {_text: '232765'}
// _attributes
// :
// {id: '1'}
