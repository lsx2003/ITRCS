/* eslint-disable @next/next/no-img-element */
import { Fragment ,useRef,useEffect} from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import SearchBar from "./SearchBar";
import BackgroundPage from "./main/BackgroundPage";
import { Parallax, IParallax } from '@react-spring/parallax'

export default function Main() {
  const parallax = useRef<IParallax>(null!);
  const textBox = useRef();
  let index = 0;
  const scroll = () => {
    index++;
    if(index == 3){
      index = 0;
    }
    if (parallax.current) {
      parallax.current.scrollTo(index)
    }
  }
  useEffect(() => {
    textBox.current.addEventListener('scroll', (e) => {
      if(textBox.current.scrollTop < textBox.current.scrollHeight / 3 * 1){
        parallax.current.scrollTo(0)
      }else if(textBox.current.scrollTop >= textBox.current.scrollHeight / 3 * 1 &&
      textBox.current.scrollTop < textBox.current.scrollHeight / 3 * 2){
        parallax.current.scrollTo(1)
      }else if(textBox.current.scrollTop > textBox.current.scrollHeight / 3 * 2){
        parallax.current.scrollTo(2)
      }
    })
  }, [])

  return (
    <Fragment>
      <main className={styles.container}>
          <Parallax ref={parallax} pages={3}>
            <BackgroundPage offset={0} imageFileName="background-image1.png" />
            <BackgroundPage offset={1} imageFileName="background-image2.png" />
            <BackgroundPage offset={2} imageFileName="background-image3.png" />
          </Parallax>
          <div className={styles.backgroundWrapper} onClick={() => scroll()}></div>
          <div className={styles.mainContentConatiner}>
            <div className={styles.contentTitle}>하나의 촛불은 미약하지만</div>
            <div className={styles.contentTitle} style={{textAlign:"end",marginTop:"-15px"}}>함께하면 어둠을 밝힙니다.</div>
            <div className={styles.mainContentWarpper} ref={textBox}>
교사의 아동학대 고소 건수 : 연간 건
<br/>
그 중 무혐의 비율 98%
<br/>
인정 판정의 사례 : “속담을 외우게 해.. 징역 6개월에 집행 유예

<br/>당신이 생각하는 진정한 교육이란 무엇입니까?
<br/>
그 중 무혐의 비율 98%
<br/>
인정 판정의 사례 : “속담을 외우게 해.. 징역 6개월에 집행 유예

<br/>당신이 생각하는 진정한 교육이란 무엇입니까?
<br/>
그 중 무혐의 비율 98%
<br/>
인정 판정의 사례 : “속담을 외우게 해.. 징역 6개월에 집행 유예

<br/>당신이 생각하는 진정한 교육이란 무엇입니까?
<br/>
그 중 무혐의 비율 98%
<br/>
인정 판정의 사례 : “속담을 외우게 해.. 징역 6개월에 집행 유예

<br/>당신이 생각하는 진정한 교육이란 무엇입니까?
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
