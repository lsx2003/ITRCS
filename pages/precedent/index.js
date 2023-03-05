import axios from 'axios';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../../components/Section';
import Tab from '../../components/Tab';
import XMLtoJSON from '../../util/xmlToJson';

export default function PrecedentHome() {
  return (
    <Fragment>
      {/* {state.apiData.precedent &&
        state.apiData.precedent.PrecSearch.prec.map((el, idx) => {
          return <div key={idx}>{el.사건번호['#text']}</div>;
        })} */}
      <Tab></Tab>
      <Section></Section>
    </Fragment>
  );
}

export async function getServerSideProps() {
  //판례 조회
  const searchWord = '아동';
  const encode = encodeURI(searchWord);
  async () => {
    try {
      const response = await axios.get(
        `https://www.law.go.kr/DRF/lawSearch.do?OC=windxtoto123&target=prec&type=XML&query=${encode}&display=100`,
      );
      const { data } = response;
      const toJson = new XMLtoJSON();
      const obJson = toJson.fromStr(data);
      return { props: obJson };
    } catch (err) {
      console.log(err);
    }
  };
  return { props: {} };
}
