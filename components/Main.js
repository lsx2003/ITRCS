/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Main() {
  return (
    <Fragment>
      <main className={styles.container}>
          <Image 
          src="/img/background-image1.png"
          className={styles.backgroundImage}
          fill
          />
          <div className={styles.backgroundWrapper}></div>
          <div className={styles.mainContentConatiner}>
            <div className={styles.contentTitle}>하나의 촛불은 미약하지만</div>
            <div className={styles.contentTitle} style={{textAlign:"end",marginTop:"-15px"}}>함께하면 어둠을 밝힙니다.</div>
            <div className={styles.mainContentWarpper}>
교사의 아동학대 고소 건수 : 연간 건
<br/>
그 중 무혐의 비율 98%
<br/>
인정 판정의 사례 : “속담을 외우게 해.. 징역 6개월에 집행 유예

<br/>당신이 생각하는 진정한 교육이란 무엇입니까?
            </div>
            <div className={styles.mainContentButtonWrapper}>
              <div className={styles.mainContentButton}>
                판례 보러 가기  
              </div>
            </div>         
          </div>
      </main>
    </Fragment>
  );
}
