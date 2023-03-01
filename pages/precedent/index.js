import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../components/Section";
import Tab from "../../components/Tab";
import { setPrecedent } from "../../slices/apiSlice";
import XMLtoJSON from "../../util/xmlToJson";

export default function PrecedentHome() {
  // 검색어
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const searchWord = "아동";
  const encode = encodeURI(searchWord);

  // 판례 조회
  const getPrecedent = async () => {
    try {
      const response = await axios.get(
        `https://www.law.go.kr/DRF/lawSearch.do?OC=windxtoto123&target=prec&type=XML&query=${encode}&display=100`
      );
      const { data } = response;
      // console.log("data", data);
      const toJson = new XMLtoJSON();
      const obJson = toJson.fromStr(data);
      dispatch(setPrecedent(obJson));
      console.log(state);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPrecedent();
  }, []);
  return (
    <Fragment>
      여기는 판례검색 페이지입니다
      {state.apiData.precedent &&
        state.apiData.precedent.PrecSearch.prec.map((el, idx) => {
          return <div key={idx}>{el.사건번호["#text"]}</div>;
        })}
      <Tab></Tab>
      <Section></Section>
    </Fragment>
  );
}
